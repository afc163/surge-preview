import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { exec } from '@actions/exec';
import { pageSpeedReportUrl } from './lighthouse';

interface ExecSurgeCommandOptions {
  command: string[];
  // Optional sink for the command's stdout/stderr, so the caller can fold the
  // deploy output into its own captured log (used for the failure summary).
  onOutput?: (chunk: string) => void;
}

export const execSurgeCommand = async ({
  command,
  onOutput,
}: ExecSurgeCommandOptions): Promise<void> => {
  let myOutput = '';
  const capture = (data: Buffer) => {
    const text = data.toString();
    myOutput += text;
    onOutput?.(text);
  };
  const options = {
    listeners: {
      stdout: capture,
      stderr: capture,
    },
  };
  await exec(`npx`, command, options);
  if (myOutput && !myOutput.includes('Success')) {
    throw new Error(myOutput);
  }
};

export const formatImage = ({
  buildingLogUrl,
  imageUrl,
  width = 300,
  alt = 'PR preview status',
}: {
  buildingLogUrl: string;
  imageUrl: string;
  width?: number;
  alt?: string;
}) => {
  return `<a href="${buildingLogUrl}"><img width="${width}" alt="${alt}" src="${imageUrl}"></a>`;
};

export const getCommentFooter = () => {
  return '<sub>🤖 Powered by <a href="https://github.com/afc163/surge-preview">surge-preview</a></sub>';
};

/**
 * Builds a scannable QR code image for the live preview URL so reviewers can
 * open it on a phone without typing the address. The image is rendered by a
 * free, no-auth QR service, keeping the action dependency-free.
 */
export const formatQRCode = ({
  previewUrl,
  size = 120,
}: {
  // Preview host without protocol, e.g. `owner-repo-job-pr-1.surge.sh`.
  previewUrl: string;
  size?: number;
}) => {
  const target = `https://${previewUrl}`;
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    target,
  )}`;
  return `<a href="${target}"><img width="${size}" alt="Scan to open preview on mobile" src="${src}"></a>`;
};

/**
 * Extracts the last `maxLines` non-empty-trimmed lines of a build/deploy log,
 * the part most likely to contain the actual error. Returns an empty string
 * when there is nothing useful to show.
 */
export const tailLog = (log: string, maxLines = 30): string => {
  if (!log) {
    return '';
  }
  const lines = log.replace(/\r\n/g, '\n').split('\n');
  // Drop trailing blank lines so the summary ends on real output.
  while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }
  return lines.slice(-maxLines).join('\n');
};

/**
 * Renders a captured failure log as a collapsed <details> block. The log is
 * wrapped in a fenced code block, so it is escaped by GitHub's renderer and
 * cannot break the surrounding comment markup. Returns an empty string when
 * there is no log to show.
 */
export const formatLogSummary = (log: string, maxLines = 30): string => {
  const tail = tailLog(log, maxLines);
  if (!tail) {
    return '';
  }
  // A 4-backtick code fence keeps the log verbatim and survives any triple
  // backticks the log itself may contain (npm/jest output, nested markdown).
  return [
    '<details><summary>📋 Build log (last lines)</summary>',
    '',
    '````',
    tail,
    '````',
    '',
    '</details>',
  ].join('\n');
};

// Aggregate size of a built site, used for the artifact size report.
export interface DistStats {
  bytes: number;
  files: number;
}

/**
 * Recursively measures the total byte size and file count of a directory.
 * Symlinks are not followed and unreadable entries are skipped so a single
 * odd file can never crash the whole report. Returns zeroes when the directory
 * is missing or cannot be read.
 */
export const measureDist = async (dir: string): Promise<DistStats> => {
  let bytes = 0;
  let files = 0;

  const walk = async (current: string): Promise<void> => {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        // Skip heavy, non-artifact directories so a misconfigured `dist`
        // (e.g. `.` or empty) doesn't traverse the whole workspace.
        if (entry.name === 'node_modules' || entry.name === '.git') {
          continue;
        }
        await walk(full);
      } else if (entry.isFile()) {
        try {
          const info = await stat(full);
          bytes += info.size;
          files += 1;
        } catch {
          // Skip entries we cannot stat (e.g. broken symlinks).
        }
      }
    }
  };

  await walk(dir);
  return { bytes, files };
};

/**
 * Formats a byte count into a compact human-readable string, e.g. `1.2 MB`.
 */
export const formatBytes = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return '0 B';
  }
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  // Clamp to [0, last unit] so a sub-1 byte value can't produce units[-1].
  const exponent = Math.max(
    0,
    Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1),
  );
  const value = bytes / 1024 ** exponent;
  // Whole bytes have no decimals; everything else keeps one for readability.
  const formatted = exponent === 0 ? `${value}` : value.toFixed(1);
  return `${formatted} ${units[exponent]}`;
};

/**
 * Renders the size delta against a previous deployment, e.g. `(+1.2 KB ⬆️)`.
 * Returns an empty string when there is nothing meaningful to compare.
 */
export const formatSizeDiff = (current: number, previous?: number): string => {
  if (
    !Number.isFinite(current) ||
    current < 0 ||
    typeof previous !== 'number' ||
    previous < 0
  ) {
    return '';
  }
  const delta = current - previous;
  if (delta === 0) {
    return ' (no change)';
  }
  const arrow = delta > 0 ? '⬆️' : '⬇️';
  const sign = delta > 0 ? '+' : '-';
  return ` (${sign}${formatBytes(Math.abs(delta))} ${arrow})`;
};

/**
 * Builds a screenshot thumbnail of the live preview's landing page, linking to
 * the page itself. Rendered by the free thum.io service, so — like the QR code
 * — it needs no extra dependency or image hosting. The thumbnail is only a
 * convenience; if the service is unreachable the image simply fails to load
 * and the rest of the comment is unaffected.
 *
 * Freshness is handled with thum.io's native `maxAge` modifier (refresh when
 * the cached image is older than N hours) on a STABLE target URL, rather than a
 * `?v=<sha>` query cache-buster. A per-commit query string turns every commit
 * into a brand-new ("cold") thum.io URL, whose first request returns a loading
 * placeholder instead of the real capture — which is what makes the embedded
 * image look blank. A stable URL lets thum.io serve the already-rendered
 * capture, and `maxAge` still keeps it current across a PR's commits.
 */
export const formatScreenshot = ({
  previewUrl,
  width = 600,
  maxAgeHours = 1,
}: {
  // Preview host without protocol, e.g. `owner-repo-job-pr-1.surge.sh`.
  previewUrl: string;
  width?: number;
  // Refresh the thumbnail when the cached capture is older than this many hours.
  maxAgeHours?: number;
}) => {
  const target = `https://${previewUrl}`;
  const src = screenshotUrl({ previewUrl, width, maxAgeHours });
  return `<a href="${target}"><img width="${width}" alt="Preview screenshot" src="${src}"></a>`;
};

// The thum.io image URL used by both the embedded screenshot and the warm-up
// poll, kept in one place so the two can never drift apart.
const screenshotUrl = ({
  previewUrl,
  width = 600,
  maxAgeHours = 1,
}: {
  previewUrl: string;
  width?: number;
  maxAgeHours?: number;
}): string =>
  `https://image.thum.io/get/width/${width}/maxAge/${maxAgeHours}/https://${previewUrl}`;

/**
 * Warms thum.io's cache for a freshly deployed preview. thum.io returns a
 * loading-placeholder GIF the first time it sees a brand-new ("cold") URL, and
 * GitHub's camo image proxy then caches that placeholder — which is what makes
 * the embedded screenshot look blank. By polling the same URL until thum.io
 * serves a real capture (a non-GIF content-type, typically PNG) BEFORE we post
 * the comment, camo's first fetch lands on the rendered image instead.
 *
 * Best-effort: any network error, timeout, or exhausted budget simply returns —
 * a missing warm-up only means the screenshot may briefly show the placeholder,
 * and must never affect the deployment result.
 */
export const warmScreenshot = async (
  previewUrl: string,
  {
    attempts = 10,
    intervalMs = 2000,
    width = 600,
    maxAgeHours = 1,
  }: {
    attempts?: number;
    intervalMs?: number;
    width?: number;
    maxAgeHours?: number;
  } = {},
): Promise<void> => {
  const url = screenshotUrl({ previewUrl, width, maxAgeHours });
  for (let i = 0; i < attempts; i += 1) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15_000) });
      const type = res.headers.get('content-type') || '';
      // A non-GIF image means thum.io has rendered the real capture.
      if (res.ok && type.startsWith('image/') && !type.includes('gif')) {
        return;
      }
    } catch {
      // Swallow and retry; warm-up is purely a convenience.
    }
    if (i < attempts - 1) {
      await new Promise((resolve) => setTimeout(resolve, intervalMs));
    }
  }
};

export type CommentStatus = 'building' | 'success' | 'fail' | 'destroy';

interface StatusMeta {
  title: string;
  // Short status badge shown inside the details column.
  badge: string;
  // Human-friendly note shown beside the preview link for non-live states.
  previewNote?: string;
  imageUrl: string;
}

// Default screenshots hosted on GitHub user-images. Kept identical to the
// previous inline URLs so existing behaviour is preserved.
const STATUS_META: Record<CommentStatus, StatusMeta> = {
  building: {
    title: '## ⚡️ Deploying preview…',
    badge: '⚡️ Building',
    previewNote: 'building, please wait…',
    imageUrl:
      'https://user-images.githubusercontent.com/507615/90240294-8d2abd00-de5b-11ea-8140-4840a0b2d571.gif',
  },
  success: {
    title: '## ✅ Preview is ready!',
    badge: '✅ Ready',
    imageUrl:
      'https://user-images.githubusercontent.com/507615/90250366-88233900-de6e-11ea-95a5-84f0762ffd39.png',
  },
  fail: {
    title: '## ❌ Deploy failed',
    badge: '❌ Failed',
    previewNote: 'may be unavailable',
    imageUrl:
      'https://user-images.githubusercontent.com/507615/90250824-4e066700-de6f-11ea-8230-600ecc3d6a6b.png',
  },
  destroy: {
    title: '## ♻️ Preview destroyed',
    badge: '♻️ Destroyed',
    previewNote: 'already destroyed',
    imageUrl:
      'https://user-images.githubusercontent.com/507615/98094112-d838f700-1ec3-11eb-8530-381c2276b80e.png',
  },
};

// Snapshot of a deployment, persisted in a hidden HTML comment so the next
// build can show what the previous deployment looked like.
export interface PreviousDeployment {
  status: CommentStatus;
  shortSha: string;
  previewUrl: string;
  updatedAt: string;
  // Built artifact size in bytes, carried forward so the next run can show a
  // size delta. Optional for backwards compatibility with older snapshots.
  bytes?: number;
  // Built artifact file count, recorded alongside `bytes`.
  files?: number;
}

const META_PREFIX = '<!-- surge-preview-meta:';
const META_SUFFIX = '-->';

/**
 * Serialises the current deployment into a hidden HTML comment so the next run
 * can recover it via `parsePreviousDeployment`.
 */
export const encodeDeploymentMeta = (snapshot: PreviousDeployment): string =>
  `${META_PREFIX}${JSON.stringify(snapshot)}${META_SUFFIX}`;

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0;

// The snapshot lives in the comment body, which anyone with write access can
// edit, so a syntactically valid but structurally wrong JSON must not slip
// through and render garbage like `https://undefined`.
const isPreviousDeployment = (value: unknown): value is PreviousDeployment => {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const v = value as Record<string, unknown>;
  const sizeIsValid = (n: unknown): boolean =>
    n === undefined || (typeof n === 'number' && Number.isFinite(n) && n >= 0);
  return (
    typeof v.status === 'string' &&
    v.status in STATUS_META &&
    isNonEmptyString(v.shortSha) &&
    isNonEmptyString(v.previewUrl) &&
    isNonEmptyString(v.updatedAt) &&
    sizeIsValid(v.bytes) &&
    sizeIsValid(v.files)
  );
};

/**
 * Recovers the previous deployment snapshot from an existing comment body.
 * Returns undefined when there is no (valid) embedded snapshot.
 */
export const parsePreviousDeployment = (
  previousBody?: string,
): PreviousDeployment | undefined => {
  if (!previousBody) {
    return undefined;
  }
  const start = previousBody.indexOf(META_PREFIX);
  if (start === -1) {
    return undefined;
  }
  const end = previousBody.indexOf(META_SUFFIX, start);
  if (end === -1) {
    return undefined;
  }
  const json = previousBody.slice(start + META_PREFIX.length, end).trim();
  try {
    const parsed: unknown = JSON.parse(json);
    return isPreviousDeployment(parsed) ? parsed : undefined;
  } catch {
    return undefined;
  }
};

export interface CommentBodyOptions {
  status: CommentStatus;
  // Preview host without protocol, e.g. `owner-repo-job-pr-1.surge.sh`.
  previewUrl: string;
  gitCommitSha: string;
  // Link to the commit page on GitHub.
  commitUrl: string;
  buildingLogUrl: string;
  // Build duration in seconds, only meaningful for the success status.
  duration?: number;
  // Override the default status screenshot if needed.
  imageUrl?: string;
  // Previous deployment to keep visible while a new build is running.
  previous?: PreviousDeployment;
  // Captured build/deploy output, surfaced (collapsed) on the fail status.
  logTail?: string;
  // Measured size of the built artifact, shown (with a delta) on success.
  dist?: DistStats;
  // Pre-rendered Lighthouse scores (a horizontal sub-table), shown as a row
  // inside the success card.
  lighthouse?: string;
  // When true, embed a screenshot of the live preview on the success card.
  screenshot?: boolean;
}

const formatUpdatedAt = () =>
  new Date().toISOString().replace('T', ' ').slice(0, 19);

const PREVIOUS_BADGE: Record<CommentStatus, string> = {
  building: '⚡️',
  success: '✅',
  fail: '❌',
  destroy: '♻️',
};

/**
 * Builds a rich, table-based status card for the PR comment. The left column
 * holds the status screenshot and the right column stacks the deployment
 * details, so the header stays meaningful. A previous deployment, when
 * provided, is surfaced below the card and re-embedded for the next run.
 */
export const getCommentBody = ({
  status,
  previewUrl,
  gitCommitSha,
  commitUrl,
  buildingLogUrl,
  duration,
  imageUrl,
  previous,
  logTail,
  dist,
  lighthouse,
  screenshot,
}: CommentBodyOptions): string => {
  const meta = STATUS_META[status];
  const shortSha = gitCommitSha?.slice(0, 7) || '';
  const updatedAt = formatUpdatedAt();

  const previewValue =
    status === 'success' || status === 'building'
      ? `<a href="https://${previewUrl}">https://${previewUrl}</a>`
      : `<s>https://${previewUrl}</s> <sub>(${meta.previewNote})</sub>`;

  // Detail lines for the right side of the card. Full-width lines span both
  // columns (long values such as the preview URL), the rest render as a
  // compact label/value pair — the mix is what gives the card its staggered,
  // not-every-row-aligned layout.
  type DetailLine = { full: string } | { label: string; value: string };
  const lines: DetailLine[] = [{ full: `🔗 <b>Preview</b> ${previewValue}` }];
  if (shortSha && commitUrl) {
    lines.push({
      label: '📝 Commit',
      value: `<a href="${commitUrl}"><code>${shortSha}</code></a>`,
    });
  }
  if (status === 'success' && typeof duration === 'number') {
    lines.push({ label: '⏱️ Build time', value: `<code>${duration}s</code>` });
  }
  // Report the built artifact size and, when a previous size is known, the
  // delta against it — a cheap regression signal right in the comment.
  if (status === 'success' && dist) {
    const diff = formatSizeDiff(dist.bytes, previous?.bytes);
    lines.push({
      label: '📦 Size',
      value: `<code>${formatBytes(dist.bytes)}</code>${diff} · ${dist.files} files`,
    });
  }
  lines.push({
    label: '🪵 Logs',
    value: `<a href="${buildingLogUrl}">View logs</a>`,
  });
  // Only the live preview (success) has a reachable URL worth scanning, so the
  // QR code rides along as a regular label/value row — label on the left, the
  // scannable image on the right — to match the rest of the card.
  if (status === 'success') {
    lines.push({
      label: '📱 Mobile',
      value: formatQRCode({ previewUrl, size: 100 }),
    });
  }
  // Lighthouse scores ride in the card as their own row: a label linking to the
  // full PageSpeed Insights report, and a horizontal 4-column sub-table of
  // scores as the value. `lighthouse` is pre-rendered by formatLighthouse.
  if (status === 'success' && lighthouse) {
    lines.push({
      label: `🔦 <a href="${pageSpeedReportUrl(previewUrl)}">Lighthouse</a>`,
      value: lighthouse,
    });
  }

  const image = formatImage({
    buildingLogUrl,
    imageUrl: imageUrl ?? meta.imageUrl,
    width: 200,
    alt: `PR preview ${meta.badge}`,
  });

  // The screenshot spans the badge banner row plus every detail line, so it
  // sits as one tall block on the left while the right side staggers.
  const rowSpan = lines.length + 1;
  const detailRows = lines
    .map((line) =>
      'full' in line
        ? `  <tr><td colspan="2">${line.full}</td></tr>`
        : `  <tr><td>${line.label}</td><td>${line.value}</td></tr>`,
    )
    .join('\n');

  const table = [
    '<table>',
    '  <tr>',
    `    <td rowspan="${rowSpan}" align="center" width="220">${image}</td>`,
    `    <td colspan="2"><b>${meta.badge}</b></td>`,
    '  </tr>',
    detailRows,
    '</table>',
  ].join('\n');

  const parts = [meta.title, '', table, ''];

  // On failure, surface the tail of the captured build/deploy log so reviewers
  // can see what went wrong without leaving the PR.
  if (status === 'fail' && logTail) {
    const summary = formatLogSummary(logTail);
    if (summary) {
      parts.push(summary, '');
    }
  }

  // On success, optionally embed a screenshot of the live preview's landing
  // page so reviewers see the change without opening the link. Collapsed by
  // default to keep the comment compact; reviewers expand it on demand.
  if (status === 'success' && screenshot) {
    parts.push(
      '<details><summary>🖼️ Preview screenshot</summary>',
      '',
      formatScreenshot({ previewUrl }),
      '',
      '</details>',
      '',
    );
  }

  if (previous) {
    const badge = PREVIOUS_BADGE[previous.status] ?? '';
    // Use non-URL link text so GitHub's autolinker doesn't wrap the anchor in
    // an extra empty <a> (which it does when the text itself looks like a URL).
    const prevPreview = `<a href="https://${previous.previewUrl}">open ↗</a>`;
    parts.push(
      `<sub>↩️ Previous: ${badge} <code>${previous.shortSha}</code> · ${previous.previewUrl} (${prevPreview}) · ${previous.updatedAt} UTC</sub>`,
      '',
    );
  }

  // Carry the artifact size forward in the snapshot. On a success deploy we
  // embed the freshly measured size; on the interim building comment there is
  // no measurement, so we preserve the previous deployment's size instead —
  // otherwise the building comment would wipe the baseline the next success
  // comment needs to render a size delta.
  const snapshotSize = dist
    ? { bytes: dist.bytes, files: dist.files }
    : previous?.bytes !== undefined
      ? { bytes: previous.bytes, files: previous.files }
      : {};

  parts.push(
    encodeDeploymentMeta({
      status,
      shortSha,
      previewUrl,
      updatedAt,
      ...snapshotSize,
    }),
    getCommentFooter(),
  );

  return parts.join('\n');
};
