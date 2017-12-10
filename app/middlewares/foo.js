'use strict';


module.exports = async (ctx, next) => {

  console.info('Middleware with no purpose in life.');

  await next();
};
