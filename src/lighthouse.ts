import * as core from '@actions/core';

// Lighthouse category scores, each 0-100 (or null when unavailable).
export interface LighthouseScores {
  performance: number | null;
  accessibility: number | null;
  bestPractices: number | null;
  seo: number | null;
}

const CATEGORY_LABELS: Array<{ key: keyof LighthouseScores; label: string }> = [
  { key: 'performance', label: 'Performance' },
  { key: 'accessibility', label: 'Accessibility' },
  { key: 'bestPractices', label: 'Best Practices' },
  { key: 'seo', label: 'SEO' },
];

// Lighthouse's own thresholds: >=90 green, >=50 orange, otherwise red.
const scoreDot = (score: number | null): string => {
  if (score === null) {
    return '⚪';
  }
  if (score >= 90) {
    return '🟢';
  }
  if (score >= 50) {
    return '🟠';
  }
  return '🔴';
};

/**
 * Renders the Lighthouse scores as a compact, collapsed table. Returns an empty
 * string when no category produced a score.
 */
export const formatLighthouse = (scores: LighthouseScores): string => {
  const rows = CATEGORY_LABELS.filter(({ key }) => scores[key] !== null).map(
    ({ key, label }) => {
      const score = scores[key];
      return `  <tr><td>${scoreDot(score)} ${label}</td><td><code>${score}</code></td></tr>`;
    },
  );

  if (rows.length === 0) {
    return '';
  }

  return [
    '<details><summary>🔦 Lighthouse scores</summary>',
    '',
    '<table>',
    '  <tr><th>Category</th><th>Score</th></tr>',
    ...rows,
    '</table>',
    '',
    '</details>',
  ].join('\n');
};

// Normalises a PageSpeed Insights category (a 0-1 fraction) into a 0-100
// integer, or null when the category is missing.
const toScore = (category: unknown): number | null => {
  if (
    category &&
    typeof category === 'object' &&
    'score' in category &&
    typeof (category as { score: unknown }).score === 'number'
  ) {
    return Math.round((category as { score: number }).score * 100);
  }
  return null;
};

/**
 * Fetches Lighthouse category scores for a URL via the public PageSpeed
 * Insights API (no API key required for low-volume use). Best-effort: returns
 * all-null scores when the request fails or the response is malformed, so the
 * caller can decide whether there is anything worth rendering.
 */
export const fetchLighthouseScores = async (
  url: string,
): Promise<LighthouseScores> => {
  const empty: LighthouseScores = {
    performance: null,
    accessibility: null,
    bestPractices: null,
    seo: null,
  };

  const endpoint = new URL(
    'https://www.googleapis.com/pagespeedonline/v5/runPagespeed',
  );
  endpoint.searchParams.set('url', url);
  for (const c of ['performance', 'accessibility', 'best-practices', 'seo']) {
    endpoint.searchParams.append('category', c);
  }
  // An optional API key lifts the strict keyless rate limits that shared CI
  // runner IPs can otherwise hit.
  const apiKey = process.env.PAGESPEED_API_KEY || process.env.PSI_API_KEY;
  if (apiKey) {
    endpoint.searchParams.set('key', apiKey);
  }

  try {
    // A full Lighthouse audit can take tens of seconds; cap it so a slow or
    // hung PSI request can't keep the runner waiting too long. The success
    // comment is posted before this runs, so this only bounds how long we wait
    // to append the scores.
    const res = await fetch(endpoint.toString(), {
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) {
      core.warning(`Lighthouse request failed with status ${res.status}`);
      return empty;
    }
    const data = (await res.json()) as {
      lighthouseResult?: { categories?: Record<string, unknown> };
    } | null;
    const categories = data?.lighthouseResult?.categories ?? {};
    return {
      performance: toScore(categories.performance),
      accessibility: toScore(categories.accessibility),
      bestPractices: toScore(categories['best-practices']),
      seo: toScore(categories.seo),
    };
  } catch (err) {
    core.warning(
      `Unable to fetch Lighthouse scores: ${
        err instanceof Error ? err.message : String(err)
      }`,
    );
    return empty;
  }
};

// True when at least one category produced a score worth rendering.
export const hasAnyScore = (scores: LighthouseScores): boolean =>
  Object.values(scores).some((s) => s !== null);
