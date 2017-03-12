var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var taskRouter = require('./routes/tasks');

//middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/tasks', taskRouter);

app.listen(5000, function() {
  console.log('listening on 5000');
});
