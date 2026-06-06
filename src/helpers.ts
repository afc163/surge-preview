import { exec } from '@actions/exec';

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
  return (
    typeof v.status === 'string' &&
    v.status in STATUS_META &&
    isNonEmptyString(v.shortSha) &&
    isNonEmptyString(v.previewUrl) &&
    isNonEmptyString(v.updatedAt)
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
  lines.push({
    label: '🪵 Logs',
    value: `<a href="${buildingLogUrl}">View logs</a>`,
  });
  lines.push({ label: '🕐 Updated', value: `<code>${updatedAt}</code> UTC` });
  // Only the live preview (success) has a reachable URL worth scanning, so the
  // QR code rides along as a regular label/value row — label on the left, the
  // scannable image on the right — to match the rest of the card.
  if (status === 'success') {
    lines.push({
      label: '📱 Mobile',
      value: formatQRCode({ previewUrl, size: 100 }),
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

  parts.push(
    encodeDeploymentMeta({ status, shortSha, previewUrl, updatedAt }),
    getCommentFooter(),
  );

  return parts.join('\n');
};
