const fs = require('fs');
const path = require('path');

const writeFile = (filePath, html) => {
  const fd = path.resolve(__dirname, '..', filePath, 'index.html');
  const contentBuf = Buffer.from(html || 'test content', {
    encoding: 'utf-8',
  });

  try {
    fs.unlinkSync(fd);
  } catch (e) {
    console.error('Could not delete file => ', e.message);
  }

  try {
    fs.writeFileSync(fd, contentBuf);
    console.log('Wrote content to file: ', fd);
  } catch (e) {
    console.error('Could not write file => ', e.message);
  }
};

(() => {
  const filePath = process.argv.slice(2)[0];
  const valueMap = process.env;
  const prefix = 'GEN_';

  const content = Object.entries(valueMap)
    .filter(([x]) => x.includes(prefix))
    .map(([key, val]) => {
      return `<div><b>${key.replace(prefix, '')}:</b> ${val}</div>`;
    });

  if (!content.length) {
    console.log(`no content received`);
    return writeFile(filePath, 'test content');
  }

  console.log(`received: ${content}`);
  const contentHtml = content.join('\n   ');
  const html = `<div>
   ${contentHtml}
</div>`;

  return writeFile(filePath, html);
})();
