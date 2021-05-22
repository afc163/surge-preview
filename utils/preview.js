const fs = require('fs');

const path = require('path');
const github = require('@actions/github');
const shell = require('shelljs');
const fse = require('fs-extra');
const core = require('@actions/core');

const writeFile = (filePath, html) => {
  const fd = path.resolve(__dirname, '..', filePath, 'index.html');
  const dirname = path.dirname(fd);

  const contentBuf = Buffer.from(html || 'test content', {
    encoding: 'utf-8',
  });

  try {
    fs.unlinkSync(fd);
  } catch (e) {
    console.error('Could not delete file => ', e.message);
  }

  fse.outputFile(fd, contentBuf);
  // try {
  //   fs.writeFileSync(fd, contentBuf);
  //   console.log('Wrote content to file: ', fd);
  // } catch (e) {
  //   console.error('Could not write file => ', e.message);
  // }
};

const allowedVars = [
  'GITHUB_ACTOR',
  'GITHUB_RUN_NUMBER',
  'GITHUB_ACTION',
  'GITHUB_REF',
  'GITHUB_SHA',
];

(() => {
  console.log(core.getInput('project_name'), 'project name');
  const project_name = core.getInput('project_name') || 'G2Plot';
  const project_branch = core.getInput('project_branch') || 'master';
  shell.exec(`npx sh start.sh ${project_name} ${project_branch}`);
  //   const filePath = process.argv.slice(2)[0];
  //   const valueMap = process.env;
  //   const content = Object.entries(valueMap)
  //     .filter(([x]) => allowedVars.includes(x))
  //     .map(([key, val]) => {
  //       return `<div><b>${key}:</b> ${val}</div>`;
  //     });
  //   console.log(content);
  //   if (!content.length) {
  //     // 复制本地 g2plot.min.js
  //     // shell.exec('cp -r ../../G2Plot/dist/g2plot.min.js ../server/static');
  //     console.log(`no content received`);
  //     return writeFile(filePath, 'test content');
  //   }

  //   content.push(
  //     `<div><b>github.context.payload.pull_request.head.ref</b>: ${github.context.payload.pull_request.head.ref}</div>`
  //   );
  //   content.push(
  //     `<div><b>github.context.payload.pull_request.head.sha</b>: ${github.context.payload.pull_request.head.sha}</div>`
  //   );

  //   console.log(`received: ${content}`);
  //   const contentHtml = content.join('\n   ');
  //   const html = `<div>
  //    ${contentHtml}
  // </div>`;

  // return writeFile(filePath, html);
})();
