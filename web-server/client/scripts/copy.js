const shell = require('shelljs');
// 复制本地 g2plot.min.js
shell.exec('cp -r ../../../G2Plot/dist/g2plot.min.js ../server/static');
// 删除 server 静态文件
shell.exec('rm -rf ../server/static/assets');
// 复制当前打包文件
shell.exec('cp -r ./static/* ../server/static/');
