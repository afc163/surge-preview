var index = async (ctx, next) => {
  ctx.type = 'text/html';
  ctx.render('index.html');
};

module.exports = {
  index,
};
