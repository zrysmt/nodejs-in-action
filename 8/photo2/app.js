
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var photos = require('./routes/photos');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());                     //默认的favicon
app.use(express.logger('dev'));                 //日志打印
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));//提供public下的静态文件

app.set('photos',__dirname+'/public/photos');

// development only
if ('development' == app.get('env')) {         //开发模式下
  app.use(express.errorHandler());
}

// app.get('/', routes.index);                    //指定程序路由
app.get('/', photos.list);                    //指定程序路由
app.get('/users', user.list);                  //指定程序路由
app.get('/upload',photos.form);
app.get('/upload',photos.submit(app.get('photos')));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
