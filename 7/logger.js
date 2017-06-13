var connect = require('connect');
var morgan = require('morgan');

var app = connect()
          // .use(connect.logger())
          .use(morgan())
          .listen(3000);
