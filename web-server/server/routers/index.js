const router = require('koa-router')();
const addControllers = require('./scan');

/**
 * 扫描文件， 生成所有的路由
 * */
addControllers(router);

module.exports = router;
