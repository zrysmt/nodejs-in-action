var connect = require('connect');
var getRawBody = require('raw-body');

var app = connect()
    // .use(connect.limit('32kb'))
    // .use(connect.bodyParser());
    .use(function(req, res, next) {
        getRawBody(req, {
            length: req.headers['content-length'],
            limit: '1mb',
            encoding: contentType.parse(req).parameters.charset
        }, function(err, string) {
            if (err) return next(err)
            req.text = string
            next()
        })
    })

app.listen(3000);
