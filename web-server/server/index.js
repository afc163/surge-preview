/**
 * 入口文件
 * */
const Koa = require('koa');
const path = require('path');
const cors = require('koa-cors');
const json = require('koa-json');
const chalk = require('chalk');
const { templating, createBrowser } = require('./utils');
const staticCache = require('koa-static-cache');
const compress = require('koa-compress');
const koaBody = require('koa-body');
const BaseConfig = require('./config');
const Router = require('./routers');

const isDevelopment = process.env.NODE_ENV === 'development';
const app = new Koa();

/**
 * 中间件， 防止服务器挂掉
 * */
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      status: err.statusCode || err.status || 500,
      message: err.message,
    };
    // 手动释放error事件
    ctx.app.emit('error', err, ctx);
  }
});

/**
 * 解决跨域问题
 * */
app.use(cors());

/**
 * json格式输出到前端
 **/
app.use(json());

/**
 * gizp压缩
 */
const options = { threshold: 2048 };
app.use(compress(options));

/**
 * 处理post请求
 * */
app.use(
  koaBody({
    multipart: true, // 支持文件上传
    jsonLimit: 5 * 1024 * 1024,
    formidable: {
      uploadDir: path.join(__dirname, 'static/file/'), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    },
    onError: function (err) {
      console.log('server error', err);
    },
  })
);

app.use(
  staticCache(path.join(__dirname, 'static'), {
    maxAge: 5 * 24 * 60 * 60,
    dynamic: true,
  })
);

/**
 * 模板引擎
 * */
app.use(
  templating('static', {
    noCache: !isDevelopment,
    watch: !isDevelopment,
  })
);

app.use(Router.routes());

// 捕获所有的异常
app.on('error', (err, ctx) => {
  console.error('server error', err);
});

app.listen(BaseConfig.port);
console.log(chalk.green('\n启动成功' + BaseConfig.port));

// createBrowser();
