const basePath = '../../../';
const fs = require('fs');
const path = require('path');
const { transform } = require('@babel/standalone');
const fp = path.resolve(basePath, `G2Plot/examples`);
const codePath = path.resolve('./src');

const codes = [];
let index = 0;
const codeGenerator = () => {
  fs.writeFileSync(
    path.resolve(__dirname, codePath, `code.ts`),
    `export const codes = [${codes}]`
  );
};

const setCodesLength = () => {
  //  用于计算浏览器高度
  fs.writeFileSync(
    path.resolve(__dirname, '../../server/static/code-info.js'),
    `module.exports = {chartLength: ${index + 1}};`,
    'utf8'
  );
};

const filter = (code) => {
  return code
    .replace(`('container',`, `('container-${index}',`)
    .replace(/`/g, '(**)')
    .replace(/new\s+_g2plot\./g, 'new G2Plot.')
    .replace(/_g2plot\.G2\./g, 'G2Plot.G2.')
    .replace(/_g2plot\./g, 'G2Plot.')
    .replace(/\\n/g, '')
    .replace(/\\/g, '')
    .replace(`('container')`, `('container-${index}')`)
    .replace(/\$\{(\S*|\S*\/S*)\}/g, function (_, sign) {
      console.log(`s1${sign}s1`);
      return `s1${sign}s1`;
    });
};

// 改序号的文件 babel 转 es5 时会多加个 )，不知道为什么，感觉是 babel 的锅。
const specialFile = [
  'apple-watch-activity.ts',
  'background.ts',
  'statistics.ts',
  'nobel-prize.ts',
  'style.ts',
  'quadrant-tooltip.ts',
  'html-tooltip.ts',
];

const scanFiles = (foldPath, dir) => {
  try {
    const files = fs.readdirSync(foldPath);
    files.forEach((fileName) => {
      const director = path.join(foldPath + '/', fileName);
      const stats = fs.statSync(director);
      if (stats.isDirectory()) {
        scanFiles(director, dir ? `${dir}.${fileName}` : fileName);
      }
      if (stats.isFile() && fileName.endsWith('.ts')) {
        const filePath = path.resolve(
          __dirname,
          basePath,
          '../G2Plot/examples',
          dir.split('.').join('/'),
          fileName
        );
        if (specialFile.includes(fileName)) {
          return;
        }
        const { code } = transform(fs.readFileSync(filePath, 'utf-8'), {
          filename: fileName,
          presets: ['react', 'typescript', 'es2015'],
          plugins: ['transform-modules-umd'],
        });
        codes.push(
          `{fileName: "${fileName}", fileIndex: ${index}, code: ` +
            '`' +
            filter(code) +
            '`}'
        );

        index += 1;
      }
    });
    codeGenerator();
    setCodesLength();
  } catch (err) {
    console.log(err);
  }
};

scanFiles(fp);
