var connect = require('connect');
var bodyParser = require('body-parser');
var morgan = require('morgan');

function edit(req, res, next) {
  if ('GET' != req.method) return next();
  res.setHeader('Content-Type', 'text/html');
  res.write('<form method="put">');
  res.write('<input type="text" name="user[name]" value="Tobi" />');
  res.write('<input type="submit" value="Update" />');
  res.write('</form>');
  res.end();
}

function update(req, res, next) {
  if ('PUT' != req.method) return next();
  res.end('Updated name to ' + req.body.user.name);
}

var app = connect()
  .use(morgan('dev'))
  // .use(connect.bodyParser())
  .use(edit)
  .use(update);

app.listen(3000);
