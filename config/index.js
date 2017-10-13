var configValues = require('./config');

module.exports = {
    getDbConnectionString : function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + 
        '@ds119585.mlab.com:19585/nodetodosample';
    }
}