import type { CommentStatus } from './helpers';

// A GitHub check run is either still running (`in_progress`) or finished
// (`completed` + a `conclusion`). We map each deployment status onto that
// shape so the preview shows up as a real PR check — which is otherwise
// missing when the action runs from a `workflow_run` event.
export interface CheckRunState {
  status: 'in_progress' | 'completed';
  conclusion?: 'success' | 'failure' | 'neutral';
  output: {
    title: string;
    summary: string;
  };
}

const CHECK_RUN_STATE: Record<
  CommentStatus,
  (previewUrl: string) => CheckRunState
> = {
  building: () => ({
    status: 'in_progress',
    output: {
      title: '⚡️ Deploying preview…',
      summary: 'The preview deployment is in progress.',
    },
  }),
  success: (previewUrl) => ({
    status: 'completed',
    conclusion: 'success',
    output: {
      title: '✅ Preview is ready',
      summary: `The preview is live at https://${previewUrl}`,
    },
  }),
  fail: (previewUrl) => ({
    status: 'completed',
    conclusion: 'failure',
    output: {
      title: '❌ Deploy failed',
      summary: `The preview deployment to https://${previewUrl} failed.`,
    },
  }),
  destroy: (previewUrl) => ({
    status: 'completed',
    conclusion: 'neutral',
    output: {
      title: '♻️ Preview destroyed',
      summary: `The preview at https://${previewUrl} has been torn down.`,
    },
  }),
};

/**
 * Maps a deployment status onto the GitHub check run fields (status,
 * conclusion and output). Kept as a pure function so the mapping can be tested
 * without hitting the API.
 */
export const getCheckRunState = (
  status: CommentStatus,
  previewUrl: string,
): CheckRunState => CHECK_RUN_STATE[status](previewUrl);

// The name shown for the check on the PR. Includes the job so multiple preview
// jobs on the same commit produce distinct checks.
export const getCheckRunName = (job: string): string =>
  `surge-preview${job ? ` (${job})` : ''}`;
