import { exec } from '@actions/exec';
import { execSurgeCommand, formatImage, getCommentFooter } from './helpers';

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
      '<a href="https://example.com/log"><img width="300" src="https://example.com/img.png"></a>',
    );
  });
});

describe('getCommentFooter', () => {
  it('returns the surge-preview footer', () => {
    expect(getCommentFooter()).toBe(
      '<sub>🤖 By [surge-preview](https://github.com/afc163/surge-preview)</sub>',
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
