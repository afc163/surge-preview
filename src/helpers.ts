import { exec } from '@actions/exec';

interface ExecSurgeCommandOptions {
  command: string[];
}

export const execSurgeCommand = async ({
  command,
}: ExecSurgeCommandOptions): Promise<void> => {
  let myOutput = '';
  const options = {
    listeners: {
      stdout: (stdoutData: Buffer) => {
        myOutput += stdoutData.toString();
      },
    },
  };
  await exec(`npx`, command, options);
  if (myOutput && !myOutput.includes('Success')) {
    throw new Error(myOutput);
  }
};
