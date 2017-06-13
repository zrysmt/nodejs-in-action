var connect = require('connect');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var session = require('express-session');

var app = connect()
    .use(favicon('./favicon.ico'))
    .use(cookieParser('keyboard cat'))
    .use(session())
    .use(function(req, res, next) {
        var sess = req.session;
        console.log(sess);
        if (sess.views) {
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>views: ' + sess.views + '</p>');
            sess.views++;
            res.end();
        } else {
            sess.views = 1;
            res.end('welcome to the session demo. refresh!');
        }
    });

app.listen(3000);
