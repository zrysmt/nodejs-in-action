var connect = require('connect');
var express    = require('express')
var path = require('path');
var serveStatic  = require('serve-static');
var serveIndex  = require('serve-index');

var app = connect()
// var app = express()
	.use('/',serveIndex(__dirname))  
	.use('/',serveStatic(__dirname))  
	.use('/limit',serveIndex(path.join(__dirname,'limit')))  
	.use('/limit',serveStatic(path.join(__dirname,'limit')))

app.listen(3000);

//http://localhost:3000