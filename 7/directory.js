var connect = require('connect');
var express    = require('express')
var path = require('path');
var serveIndex  = require('serve-index');

var app = connect()
// var app = express()
	.use('/limit',serveIndex(path.join(__dirname,'limit'), {'icons': true}))  //文件夹/nodejs/code/7/limit

app.listen(3000);