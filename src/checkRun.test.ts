import { getCheckRunName, getCheckRunState } from './checkRun';

describe('getCheckRunState', () => {
  it('maps building to an in-progress check with no conclusion', () => {
    const state = getCheckRunState('building', 'a-b-pr-1.surge.sh');
    expect(state.status).toBe('in_progress');
    expect(state.conclusion).toBeUndefined();
    expect(state.output.title).toContain('Deploying');
  });

  it('maps success to a completed check with a success conclusion', () => {
    const state = getCheckRunState('success', 'a-b-pr-1.surge.sh');
    expect(state.status).toBe('completed');
    expect(state.conclusion).toBe('success');
    expect(state.output.summary).toContain('https://a-b-pr-1.surge.sh');
  });

  it('maps fail to a completed check with a failure conclusion', () => {
    const state = getCheckRunState('fail', 'a-b-pr-1.surge.sh');
    expect(state.status).toBe('completed');
    expect(state.conclusion).toBe('failure');
  });

  it('maps destroy to a completed check with a neutral conclusion', () => {
    const state = getCheckRunState('destroy', 'a-b-pr-1.surge.sh');
    expect(state.status).toBe('completed');
    expect(state.conclusion).toBe('neutral');
  });
});

describe('getCheckRunName', () => {
  it('includes the job name when present', () => {
    expect(getCheckRunName('build')).toBe('surge-preview (build)');
  });

  it('falls back to a bare name when there is no job', () => {
    expect(getCheckRunName('')).toBe('surge-preview');
  });
});
