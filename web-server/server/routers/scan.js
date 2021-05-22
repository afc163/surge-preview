/**
 * 扫描文件，自动生成router
 * */
const fs = require('fs');
const path = require('path');

const addControllers = function (router) {
  try {
    var files = fs.readdirSync(path.resolve('controller'));
    var js_files = files.filter((f) => {
      return f.endsWith('.js');
    });
    for (var f of js_files) {
      var mapping = require(path.resolve('controller') + '/' + f);
      addMapping(router, mapping);
    }
  } catch (e) {
    console.log(e);
  }
};

function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET')) {
      var path = url.substring(4);
      router.get(path, mapping[url]);
    } else if (url.startsWith('POST')) {
      var path = url.substring(5);
      router.post(path, mapping[url]);
    } else {
      console.error('不支持的请求方式');
    }
  }
}
module.exports = addControllers;
