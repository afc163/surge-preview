const warning = jest.fn();
jest.mock('@actions/core', () => ({ warning }));

import {
  type LighthouseScores,
  fetchLighthouseScores,
  formatLighthouse,
  hasAnyScore,
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

  it('renders a collapsed table with a coloured dot per category', () => {
    const out = formatLighthouse(scores());
    expect(out).toContain('🔦 Lighthouse scores');
    // >=90 green, >=50 orange, <50 red
    expect(out).toContain(
      '<tr><td>🟢 Performance</td><td><code>95</code></td></tr>',
    );
    expect(out).toContain(
      '<tr><td>🟠 Accessibility</td><td><code>88</code></td></tr>',
    );
    expect(out).toContain(
      '<tr><td>🟢 Best Practices</td><td><code>100</code></td></tr>',
    );
    expect(out).toContain('<tr><td>🟠 SEO</td><td><code>70</code></td></tr>');
  });

  it('uses a red dot below 50 and skips null categories', () => {
    const out = formatLighthouse(scores({ performance: 30, seo: null }));
    expect(out).toContain('🔴 Performance');
    expect(out).not.toContain('SEO');
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
