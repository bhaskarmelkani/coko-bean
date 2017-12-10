'use strict';

module.exports = ({ db, config }) => ({

  async getUser (ctx){
    const dbConfig = config.db;
    const userName  = db.getUserName(dbConfig.host);
    ctx.body = userName;
  },

  async getUserPage (ctx){
    const userName  = db.getUserName();
    await ctx.render('user', { userName });
  }

});
