'use strict';

module.exports = ({config}) => ({

  getUserName (host){
    const dbConfig = config.db;
    const dbHost = host || dbConfig.host;
    return 'James Bond is hosting at ' + dbHost;
  }

});
