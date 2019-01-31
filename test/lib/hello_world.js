var restify = require('restify');

// "database"

const greetings = [
  {},
  {
      label: "Hello, world!"
  }
];

function respond(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(greetings[req.params.id]));
  next();
}

var app = restify.createServer();
app.get('/greetings/:id', respond);
app.head('/greetings/:id', respond);

const server = module.exports = app.listen(8080, function() {
  console.log('%s listening at %s', app.name, app.url);
});
