const warning = jest.fn();
jest.mock('@actions/core', () => ({ warning }));

import {
  fetchLighthouseScores,
  formatLighthouse,
  hasAnyScore,
  type LighthouseScores,
  pageSpeedReportUrl,
} from './lighthouse';

const scores = (
  overrides: Partial<LighthouseScores> = {},
): LighthouseScores => ({
  performance: 95,
  accessibility: 88,
  bestPractices: 100,
  seo: 70,
  ...overrides,
});

describe('hasAnyScore', () => {
  it('is true when at least one score is present', () => {
    expect(
      hasAnyScore({
        performance: null,
        accessibility: null,
        bestPractices: null,
        seo: 10,
      }),
    ).toBe(true);
  });

  it('is false when every score is null', () => {
    expect(
      hasAnyScore({
        performance: null,
        accessibility: null,
        bestPractices: null,
        seo: null,
      }),
    ).toBe(false);
  });
});

describe('formatLighthouse', () => {
  it('returns an empty string when there are no scores', () => {
    expect(
      formatLighthouse({
        performance: null,
        accessibility: null,
        bestPractices: null,
        seo: null,
      }),
    ).toBe('');
  });

  it('renders a horizontal sub-table with a coloured dot per category', () => {
    const out = formatLighthouse(scores());
    // header row of short category names
    expect(out).toContain('<sub>Perf</sub>');
    expect(out).toContain('<sub>A11y</sub>');
    expect(out).toContain('<sub>Best</sub>');
    expect(out).toContain('<sub>SEO</sub>');
    // score row: >=90 green, >=50 orange
    expect(out).toContain('🟢 <code>95</code>');
    expect(out).toContain('🟠 <code>88</code>');
    expect(out).toContain('🟢 <code>100</code>');
    expect(out).toContain('🟠 <code>70</code>');
    // it is a sub-table, not the old collapsed details block
    expect(out).toContain('<table>');
    expect(out).not.toContain('<details>');
  });

  it('uses a red dot below 50 and skips null categories', () => {
    const out = formatLighthouse(scores({ performance: 30, seo: null }));
    expect(out).toContain('🔴 <code>30</code>');
    expect(out).not.toContain('SEO');
  });
});

describe('pageSpeedReportUrl', () => {
  it('builds an encoded PSI analysis url for the preview host', () => {
    expect(pageSpeedReportUrl('a-b-pr-1.surge.sh')).toBe(
      'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fa-b-pr-1.surge.sh',
    );
  });
});

describe('fetchLighthouseScores', () => {
  const originalFetch = global.fetch;
  afterEach(() => {
    global.fetch = originalFetch;
    warning.mockClear();
  });

  it('maps PSI category fractions to 0-100 integers', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        lighthouseResult: {
          categories: {
            performance: { score: 0.95 },
            accessibility: { score: 0.876 },
            'best-practices': { score: 1 },
            seo: { score: 0.5 },
          },
        },
      }),
    }) as unknown as typeof fetch;

    const result = await fetchLighthouseScores('https://a.surge.sh');
    expect(result).toEqual({
      performance: 95,
      accessibility: 88,
      bestPractices: 100,
      seo: 50,
    });
  });

  it('includes the API key in the request when the env var is set', async () => {
    process.env.PAGESPEED_API_KEY = 'secret-key';
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ lighthouseResult: { categories: {} } }),
    });
    global.fetch = fetchMock as unknown as typeof fetch;

    await fetchLighthouseScores('https://a.surge.sh');

    expect(fetchMock.mock.calls[0][0]).toContain('key=secret-key');
    delete process.env.PAGESPEED_API_KEY;
  });

  it('returns all-null and warns on a non-ok response', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ ok: false, status: 500 }) as unknown as typeof fetch;

    const result = await fetchLighthouseScores('https://a.surge.sh');
    expect(hasAnyScore(result)).toBe(false);
    expect(warning).toHaveBeenCalled();
  });

  it('returns all-null and warns when fetch throws', async () => {
    global.fetch = jest
      .fn()
      .mockRejectedValue(new Error('network down')) as unknown as typeof fetch;

    const result = await fetchLighthouseScores('https://a.surge.sh');
    expect(hasAnyScore(result)).toBe(false);
    expect(warning).toHaveBeenCalled();
  });

  it('returns all-null when the response body is null', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => null,
    }) as unknown as typeof fetch;

    const result = await fetchLighthouseScores('https://a.surge.sh');
    expect(hasAnyScore(result)).toBe(false);
  });
});
