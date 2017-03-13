var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routesRouter = require('./routes/routes.js');

// NOTE: Middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/employee', routesRouter);
// NOTE: Byproduct of .use is it takes off the employee part of /employee in next file

app.listen(5000, function() {
  console.log('Server started & listening on port 5000');
});
