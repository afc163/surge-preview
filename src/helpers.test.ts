import { exec } from '@actions/exec';
import {
  encodeDeploymentMeta,
  execSurgeCommand,
  formatImage,
  formatLogSummary,
  formatQRCode,
  getCommentBody,
  getCommentFooter,
  parsePreviousDeployment,
  tailLog,
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

describe('tailLog', () => {
  it('returns an empty string for empty input', () => {
    expect(tailLog('')).toBe('');
  });

  it('keeps only the last N lines', () => {
    const log = ['1', '2', '3', '4', '5'].join('\n');
    expect(tailLog(log, 2)).toBe('4\n5');
  });

  it('trims trailing blank lines and normalises CRLF', () => {
    expect(tailLog('a\r\nb\r\n\r\n\r\n', 10)).toBe('a\nb');
  });
});

describe('formatLogSummary', () => {
  it('returns an empty string when there is no log', () => {
    expect(formatLogSummary('')).toBe('');
    expect(formatLogSummary('\n\n')).toBe('');
  });

  it('wraps the log tail in a collapsed, fenced details block', () => {
    const out = formatLogSummary('error line 1\nerror line 2', 10);
    expect(out).toContain(
      '<details><summary>📋 Build log (last lines)</summary>',
    );
    expect(out).toContain('````\nerror line 1\nerror line 2\n````');
    expect(out).toContain('</details>');
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

  it('includes a collapsed build log on failure when a log is provided', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'fail',
      logTail: 'npm ERR! something broke\nnpm ERR! see log',
    });
    expect(body).toContain(
      '<details><summary>📋 Build log (last lines)</summary>',
    );
    expect(body).toContain('npm ERR! something broke');
  });

  it('omits the build log block on success even if a log is provided', () => {
    const body = getCommentBody({
      ...baseOptions,
      status: 'success',
      logTail: 'irrelevant output',
    });
    expect(body).not.toContain('📋 Build log');
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

  it('forwards stdout and stderr to onOutput', async () => {
    mockedExec.mockImplementation(async (_cmd, _args, options) => {
      options?.listeners?.stdout?.(Buffer.from('Success out '));
      options?.listeners?.stderr?.(Buffer.from('err'));
      return 0;
    });
    const chunks: string[] = [];
    await execSurgeCommand({
      command: ['surge'],
      onOutput: (c) => chunks.push(c),
    });
    expect(chunks.join('')).toBe('Success out err');
  });
});
