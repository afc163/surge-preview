import { exec } from '@actions/exec';
import {
  encodeDeploymentMeta,
  execSurgeCommand,
  formatBytes,
  formatImage,
  formatQRCode,
  formatScreenshot,
  formatSizeDiff,
  getCommentBody,
  getCommentFooter,
  measureDist,
  parsePreviousDeployment,
} from './helpers';

jest.mock('@actions/exec');

const mockedExec = exec as jest.MockedFunction<typeof exec>;

describe('formatImage', () => {
  it('wraps the image in a link to the building log', () => {
    expect(
      formatImage({
        buildingLogUrl: 'https://example.com/log',
        imageUrl: 'https://example.com/img.png',
      }),
    ).toBe(
      '<a href="https://example.com/log"><img width="300" alt="PR preview status" src="https://example.com/img.png"></a>',
    );
  });

  it('honours a custom width and alt text', () => {
    expect(
      formatImage({
        buildingLogUrl: 'https://example.com/log',
        imageUrl: 'https://example.com/img.png',
        width: 420,
        alt: 'custom alt',
      }),
    ).toBe(
      '<a href="https://example.com/log"><img width="420" alt="custom alt" src="https://example.com/img.png"></a>',
    );
  });
});

describe('getCommentFooter', () => {
  it('returns the surge-preview footer', () => {
    expect(getCommentFooter()).toBe(
      '<sub>🤖 Powered by <a href="https://github.com/afc163/surge-preview">surge-preview</a></sub>',
    );
  });
});

describe('formatQRCode', () => {
  it('renders a QR image that links to and encodes the preview url', () => {
    expect(formatQRCode({ previewUrl: 'a-b-pr-1.surge.sh' })).toBe(
      '<a href="https://a-b-pr-1.surge.sh"><img width="120" alt="Scan to open preview on mobile" src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https%3A%2F%2Fa-b-pr-1.surge.sh"></a>',
    );
  });

  it('honours a custom size for both the image and the encoded request', () => {
    const html = formatQRCode({ previewUrl: 'a-b-pr-1.surge.sh', size: 200 });
    expect(html).toContain('width="200"');
    expect(html).toContain('size=200x200');
  });
});

describe('formatBytes', () => {
  it('formats zero and non-positive values as 0 B', () => {
    expect(formatBytes(0)).toBe('0 B');
    expect(formatBytes(-5)).toBe('0 B');
    expect(formatBytes(Number.NaN)).toBe('0 B');
  });

  it('formats whole bytes without decimals', () => {
    expect(formatBytes(512)).toBe('512 B');
  });

  it('scales up to KB/MB/GB with one decimal', () => {
    expect(formatBytes(1024)).toBe('1.0 KB');
    expect(formatBytes(1536)).toBe('1.5 KB');
    expect(formatBytes(1024 * 1024)).toBe('1.0 MB');
    expect(formatBytes(1024 * 1024 * 1024)).toBe('1.0 GB');
  });
});

describe('formatSizeDiff', () => {
  it('returns empty when there is no previous size', () => {
    expect(formatSizeDiff(1000)).toBe('');
    expect(formatSizeDiff(1000, -1)).toBe('');
  });

  it('reports no change for an identical size', () => {
    expect(formatSizeDiff(1000, 1000)).toBe(' (no change)');
  });

  it('reports an increase with an up arrow', () => {
    expect(formatSizeDiff(2048, 1024)).toBe(' (+1.0 KB ⬆️)');
  });

  it('reports a decrease with a down arrow', () => {
    expect(formatSizeDiff(1024, 2048)).toBe(' (-1.0 KB ⬇️)');
  });
});

describe('measureDist', () => {
  const fs = require('node:fs');
  const os = require('node:os');
  const path = require('node:path');
  let dir: string;

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'surge-dist-'));
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it('returns zeroes for a missing directory', async () => {
    expect(await measureDist(path.join(dir, 'nope'))).toEqual({
      bytes: 0,
      files: 0,
    });
  });

  it('sums bytes and file counts recursively', async () => {
    fs.writeFileSync(path.join(dir, 'a.txt'), 'hello'); // 5 bytes
    fs.mkdirSync(path.join(dir, 'sub'));
    fs.writeFileSync(path.join(dir, 'sub', 'b.txt'), 'world!'); // 6 bytes
    expect(await measureDist(dir)).toEqual({ bytes: 11, files: 2 });
  });

  it('skips node_modules and .git directories', async () => {
    fs.writeFileSync(path.join(dir, 'a.txt'), 'hello'); // 5 bytes, counted
    fs.mkdirSync(path.join(dir, 'node_modules'));
    fs.writeFileSync(path.join(dir, 'node_modules', 'big.js'), 'ignored');
    fs.mkdirSync(path.join(dir, '.git'));
    fs.writeFileSync(path.join(dir, '.git', 'HEAD'), 'ignored too');
    expect(await measureDist(dir)).toEqual({ bytes: 5, files: 1 });
  });
});

describe('formatScreenshot', () => {
  it('renders a thumbnail with a stable URL and a maxAge refresh modifier', () => {
    expect(formatScreenshot({ previewUrl: 'a-b-pr-1.surge.sh' })).toBe(
      '<a href="https://a-b-pr-1.surge.sh"><img width="600" alt="Preview screenshot" src="https://image.thum.io/get/width/600/maxAge/1/https://a-b-pr-1.surge.sh"></a>',
    );
  });

  it('does not use a per-commit query cache-buster (avoids cold placeholder)', () => {
    const html = formatScreenshot({ previewUrl: 'a-b-pr-1.surge.sh' });
    expect(html).not.toContain('?v=');
  });

  it('honours a custom width and maxAge', () => {
    const html = formatScreenshot({
      previewUrl: 'a-b-pr-1.surge.sh',
      width: 800,
      maxAgeHours: 0,
    });
    expect(html).toContain('width="800"');
    expect(html).toContain('/width/800/');
    expect(html).toContain('/maxAge/0/');
  });
});

describe('getCommentBody', () => {
  const baseOptions = {
    previewUrl: 'owner-repo-preview-pr-1.surge.sh',
    gitCommitSha: '2eeb596abcdef1234567890',
    commitUrl: 'https://github.com/afc163/surge-preview/commit/2eeb596',
    buildingLogUrl: 'https://github.com/afc163/surge-preview/runs/123',
  };

  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2026-06-05T04:12:33Z'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders a success card with build time and a live preview link', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'success',
      duration: 12.3,
    });
    expect(body).toContain('## ✅ Preview is ready!');
    expect(body).toContain('<b>✅ Ready</b>');
    expect(body).toContain('<td>⏱️ Build time</td><td><code>12.3s</code></td>');
    expect(body).toContain(
      '<a href="https://owner-repo-preview-pr-1.surge.sh">https://owner-repo-preview-pr-1.surge.sh</a>',
    );
    // short sha is truncated to 7 chars and linked to the commit url
    expect(body).toContain(
      '<a href="https://github.com/afc163/surge-preview/commit/2eeb596"><code>2eeb596</code></a>',
    );
    expect(body).toContain(
      '<a href="https://github.com/afc163/surge-preview/runs/123">View logs</a>',
    );
    expect(body).toContain(
      '<td>🕐 Updated</td><td><code>2026-06-05 04:12:33</code> UTC</td>',
    );
    // screenshot lives inside the table and spans the rows via rowspan; the
    // success card has an extra QR row, so the screenshot spans 7 rows
    expect(body).toContain('<table>');
    expect(body).toContain('rowspan="7"');
    expect(body).toContain('width="200"');
    expect(body).toContain('alt="PR preview ✅ Ready"');
    // a scannable QR code to the live preview is rendered as a label/value row
    // inside the card for mobile reviewers
    expect(body).toContain(
      '<td>📱 Mobile</td><td><a href="https://owner-repo-preview-pr-1.surge.sh"><img width="100" alt="Scan to open preview on mobile" src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https%3A%2F%2Fowner-repo-preview-pr-1.surge.sh"></a></td>',
    );
  });

  it('renders the artifact size with no delta on a first deploy', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'success',
      dist: { bytes: 1536, files: 3 },
    });
    expect(body).toContain(
      '<td>📦 Size</td><td><code>1.5 KB</code> · 3 files</td>',
    );
    // the size is persisted into the snapshot for the next run to diff against
    const recovered = parsePreviousDeployment(body);
    expect(recovered?.bytes).toBe(1536);
    expect(recovered?.files).toBe(3);
  });

  it('renders the artifact size with a delta against the previous deploy', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'success',
      dist: { bytes: 2048, files: 4 },
      previous: {
        status: 'success',
        shortSha: 'abc1234',
        previewUrl: 'owner-repo-preview-pr-1.surge.sh',
        updatedAt: '2026-06-04 00:00:00',
        bytes: 1024,
        files: 3,
      },
    });
    expect(body).toContain(
      '<td>📦 Size</td><td><code>2.0 KB</code> (+1.0 KB ⬆️) · 4 files</td>',
    );
  });

  it('carries the previous size forward through the building comment', () => {
    // The interim building comment has no measured dist, but it must preserve
    // the previous deployment's size in the snapshot so the next success
    // comment can still render a delta (otherwise the baseline is wiped).
    const buildingBody = getCommentBody({
      ...baseOptions,
      status: 'building',
      previous: {
        status: 'success',
        shortSha: 'abc1234',
        previewUrl: 'owner-repo-preview-pr-1.surge.sh',
        updatedAt: '2026-06-04 00:00:00',
        bytes: 1024,
        files: 3,
      },
    });
    const recovered = parsePreviousDeployment(buildingBody);
    expect(recovered?.bytes).toBe(1024);
    expect(recovered?.files).toBe(3);

    // And feeding that recovered snapshot into the success comment yields a diff.
    const successBody = getCommentBody({
      ...baseOptions,
      status: 'success',
      dist: { bytes: 2048, files: 4 },
      previous: recovered,
    });
    expect(successBody).toContain('(+1.0 KB ⬆️)');
  });

  it('embeds a screenshot on success when screenshot is enabled', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'success',
      screenshot: true,
    });
    expect(body).toContain('🖼️ Preview screenshot');
    expect(body).toContain(
      'src="https://image.thum.io/get/width/600/maxAge/1/https://owner-repo-preview-pr-1.surge.sh"',
    );
  });

  it('omits the screenshot when screenshot is not enabled', () => {
    const body = getCommentBody({ ...baseOptions, status: 'success' });
    expect(body).not.toContain('🖼️ Preview screenshot');
  });

  it('omits the screenshot on non-success statuses even when enabled', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'building',
      screenshot: true,
    });
    expect(body).not.toContain('🖼️ Preview screenshot');
  });

  it('renders a building card without build time', () => {
    const body = getCommentBody({ ...baseOptions, status: 'building' });
    expect(body).toContain('## ⚡️ Deploying preview…');
    expect(body).toContain('<b>⚡️ Building</b>');
    expect(body).not.toContain('Build time');
    expect(body).not.toContain('<code>12.3s</code>');
    // one fewer detail row than the success card → smaller rowspan
    expect(body).toContain('rowspan="5"');
    // the preview is not live yet, so no QR code is shown
    expect(body).not.toContain('📱 Scan to open on mobile');
  });

  it('renders a fail card with a struck-through preview link', () => {
    const body = getCommentBody({ ...baseOptions, status: 'fail' });
    expect(body).toContain('## ❌ Deploy failed');
    expect(body).toContain('<s>https://owner-repo-preview-pr-1.surge.sh</s>');
  });

  it('appends the Lighthouse block on success when provided', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'success',
      lighthouse: '<!-- lh -->LIGHTHOUSE-BLOCK',
    });
    expect(body).toContain('LIGHTHOUSE-BLOCK');
  });

  it('ignores the Lighthouse block on non-success statuses', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'building',
      lighthouse: 'LIGHTHOUSE-BLOCK',
    });
    expect(body).not.toContain('LIGHTHOUSE-BLOCK');
  });

  it('renders a destroy card', () => {
    const body = getCommentBody({ ...baseOptions, status: 'destroy' });
    expect(body).toContain('## ♻️ Preview destroyed');
    expect(body).toContain('already destroyed');
  });

  it('omits the commit line when there is no sha', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'building',
      gitCommitSha: '',
    });
    expect(body).not.toContain('<code></code>');
    expect(body).not.toContain('/commit/');
  });

  it('shows the previous deployment and re-embeds the current snapshot', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'building',
      previous: {
        status: 'success',
        shortSha: 'abc1234',
        previewUrl: 'owner-repo-preview-pr-1.surge.sh',
        updatedAt: '2026-06-04 00:00:00',
      },
    });
    expect(body).toContain('↩️ Previous: ✅ <code>abc1234</code>');
    expect(body).toContain(
      '<a href="https://owner-repo-preview-pr-1.surge.sh">open ↗</a>',
    );
    expect(body).toContain('2026-06-04 00:00:00 UTC');
    // the current build is persisted for the next run to read back
    const recovered = parsePreviousDeployment(body);
    expect(recovered).toEqual({
      status: 'building',
      shortSha: '2eeb596',
      previewUrl: 'owner-repo-preview-pr-1.surge.sh',
      updatedAt: '2026-06-05 04:12:33',
    });
  });
});

describe('parsePreviousDeployment', () => {
  it('returns undefined when there is no embedded snapshot', () => {
    expect(parsePreviousDeployment(undefined)).toBeUndefined();
    expect(parsePreviousDeployment('just a normal comment')).toBeUndefined();
  });

  it('returns undefined for a malformed snapshot', () => {
    expect(
      parsePreviousDeployment('<!-- surge-preview-meta:{not json-->'),
    ).toBeUndefined();
  });

  it('returns undefined for a structurally invalid snapshot', () => {
    // valid JSON, but missing/invalid fields must not slip through and render
    // garbage like `https://undefined`
    const unknownStatus = encodeDeploymentMeta({
      // biome-ignore lint/suspicious/noExplicitAny: deliberately invalid input
      status: 'bogus' as any,
      shortSha: 'abc1234',
      previewUrl: 'a.surge.sh',
      updatedAt: '2026-06-05 04:12:33',
    });
    expect(parsePreviousDeployment(unknownStatus)).toBeUndefined();

    const missingFields = `<!-- surge-preview-meta:{"status":"success"}-->`;
    expect(parsePreviousDeployment(missingFields)).toBeUndefined();

    const emptyPreview = `<!-- surge-preview-meta:{"status":"success","shortSha":"abc1234","previewUrl":"","updatedAt":"x"}-->`;
    expect(parsePreviousDeployment(emptyPreview)).toBeUndefined();
  });

  it('round-trips an encoded snapshot', () => {
    const snapshot = {
      status: 'success' as const,
      shortSha: 'abc1234',
      previewUrl: 'a.surge.sh',
      updatedAt: '2026-06-05 04:12:33',
    };
    expect(parsePreviousDeployment(encodeDeploymentMeta(snapshot))).toEqual(
      snapshot,
    );
  });
});

describe('execSurgeCommand', () => {
  it('passes the command to npx', async () => {
    mockedExec.mockResolvedValue(0);
    await execSurgeCommand({ command: ['surge', './public', 'foo.surge.sh'] });
    expect(mockedExec).toHaveBeenCalledWith(
      'npx',
      ['surge', './public', 'foo.surge.sh'],
      expect.any(Object),
    );
  });

  it('resolves when the output contains "Success"', async () => {
    mockedExec.mockImplementation(async (_cmd, _args, options) => {
      options?.listeners?.stdout?.(Buffer.from('Success! Published'));
      return 0;
    });
    await expect(
      execSurgeCommand({ command: ['surge'] }),
    ).resolves.toBeUndefined();
  });

  it('throws when output is produced but does not contain "Success"', async () => {
    mockedExec.mockImplementation(async (_cmd, _args, options) => {
      options?.listeners?.stdout?.(
        Buffer.from('Aborted: something went wrong'),
      );
      return 0;
    });
    await expect(execSurgeCommand({ command: ['surge'] })).rejects.toThrow(
      'Aborted: something went wrong',
    );
  });

  it('does not throw when there is no output', async () => {
    mockedExec.mockResolvedValue(0);
    await expect(
      execSurgeCommand({ command: ['surge'] }),
    ).resolves.toBeUndefined();
  });
});
