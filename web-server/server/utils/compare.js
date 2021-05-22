const fs = require('fs');
const chalk = require('chalk');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const openImage = require('./open');

const compareImage = (path1, path2, basePath) => {
  console.log(chalk.green('\n****** 截图比对中 ******\n'));
  const img1 = PNG.sync.read(fs.readFileSync(path1));
  const img2 = PNG.sync.read(fs.readFileSync(path2));
  const { width, height } = img1;
  const diff = new PNG({ width, height });
  pixelmatch(img1.data, img2.data, diff.data, width, height, {
    threshold: 0.1,
  });
  const diffPath = `${basePath}/diff.png`;
  fs.writeFileSync(diffPath, PNG.sync.write(diff));
  console.log(chalk.green('\n****** 截图比对完成 ******\n'));
  openImage(diffPath);
};

module.exports = compareImage;
