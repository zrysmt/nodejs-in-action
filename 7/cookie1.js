var connect = require('connect');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

var app = connect()
	// .use(connect.logger('dev'))  
	.use(morgan('dev'))
	// .use(connect.cookieParser('tobi is a cool ferret'))
	.use(cookieParser('tobi is a cool ferret'))
	.use(function(req,res){
		console.log(req.cookie);
		console.log(req.signedCookie);
		res.end('hello\n');
	}).listen(3000);