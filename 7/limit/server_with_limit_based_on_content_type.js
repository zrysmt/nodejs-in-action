var connect = require('connect');
var getRawBody = require('raw-body');
var bodyParser = require('body-parser');

function type(type, size) {
    return function(req, res, next) {
        var ct = req.headers['content-type'] || '';
        if (0 != ct.indexOf(type)) {
            return next();
        }

        getRawBody(req, {
            length: req.headers['content-length'],
            limit: size,
            encoding: contentType.parse(req).parameters.charset
        }, function(err, string) {
            if (err) return next(err)
            req.text = string
            next()
        })

    }
}

var app = connect()
    .use(type('application/x-www-form-urlencoded', '64kb'))
    .use(type('application/json', '32kb'))
    .use(type('image', '2mb'))
    .use(type('video', '300mb'))
    .use(bodyParser.json())
    .use(function(req, res) {
        res.end('hello\n');
    });

app.listen(3000);



// 旧版本
/*var connect = require('connect');

function type(type, fn) {
  return function(req, res, next){
    var ct = req.headers['content-type'] || '';
    if (0 != ct.indexOf(type)) {
      return next();
    }
    fn(req, res, next);
  }
}

var app = connect()
          .use(type('application/x-www-form-urlencoded', connect.limit('64kb')))
          .use(type('application/json', connect.limit('32kb')))
          .use(type('image', connect.limit('2mb')))
          .use(type('video', connect.limit('300mb')))
          .use(connect.bodyParser());

app.listen(3000);*/
