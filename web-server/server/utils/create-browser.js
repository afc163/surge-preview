const fs = require('fs');
const puppeteer = require('puppeteer');
const delay = require('delay');
const chalk = require('chalk');
const compareImage = require('./compare');
const { getFormateDate } = require('./util');
const { chartLength } = require('../static/code-info');

const renderTime = 24000; // 确保图片能全部渲染完成
const singleChartHeight = 224; // 单个图表的高度，一行 4 个

const createBrowser = async () => {
  const dateString = getFormateDate();
  const basePath = `static/file/${dateString}`;
  if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
  }
  // 在线截图
  console.log(chalk.green('\n****** 在线截图生成中 ******\n'));
  const onlineBrowser = await puppeteer.launch();
  const onlinePage = await onlineBrowser.newPage();
  const viewHeight = Math.ceil(chartLength / 4) * singleChartHeight + 48;
  await onlinePage.setViewport({
    width: 1440,
    height: viewHeight,
    deviceScaleFactor: 1,
  });
  await onlinePage.goto('http://localhost:3000');
  await delay(renderTime);
  const onlinePath = `${basePath}/online.png`;
  await onlinePage.screenshot({
    path: onlinePath,
  });
  console.log(chalk.green('\n****** 在线截图生成完成 ******\n'));
  await onlineBrowser.close();

  // 本地截图
  console.log(chalk.green('\n****** 本地截图生成中 ******\n'));
  const localBrowser = await puppeteer.launch();
  const localPage = await localBrowser.newPage();
  await localPage.setViewport({
    width: 1440,
    height: viewHeight,
    deviceScaleFactor: 1,
  });
  await localPage.goto('http://localhost:3000?type=local');
  await delay(renderTime);
  const localPath = `${basePath}/local.png`;
  await localPage.screenshot({
    path: localPath,
  });
  console.log(chalk.green('\n****** 本地截图生成完成 ******\n'));
  await localBrowser.close();
  compareImage(onlinePath, localPath, basePath);
};

module.exports = createBrowser;
