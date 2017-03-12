var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

// get all employees
router.get('/', function(req, res) {
  console.log('hit my get all employees route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // SELECT * FROM task;
      client.query('SELECT * FROM employee_salary_data ORDER BY status, id;', function(err, result) {
        done();

        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

// create a new task in the db
router.post('/', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var employeeObject = req.body;

  // db query
  // INSERT INTO task (name) VALUES ('test');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // NOTE: INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-01', 'employee-first-01', 'CEO', 001, 400000);
      client.query('INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ($1, $2, $3, $4, $5);',
        [employeeObject.employeeData], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});

// create a new task in the db
router.delete('/:id', function(req, res) {
  var employeeToDeleteId = req.params.id;
  console.log('hit delete route');
  console.log('here is the id to delete ->', employeeToDeleteId);

  // db query
  // DELETE FROM task WHERE id=7
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('DELETE FROM employee_salary_data WHERE id=$1;',
        [employeeToDeleteId], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});




router.put('/complete/:id', function(req, res) {
  var employeeToCompleteId = req.params.id;
  console.log('hit complete route');
  console.log('here is the id to complete ->', employeeToCompleteId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('UPDATE employee_salary_data SET status=TRUE WHERE ID=$1;',
        [employeeToCompleteId], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});


router.put('/uncomplete/:id', function(req, res) {
  var employeeToIncompleteId = req.params.id;
  console.log('hit complete route');
  console.log('here is the id to complete ->', employeeToIncompleteId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('UPDATE employee_salary_data SET status=FALSE WHERE ID=$1;',
        [employeeToIncompleteId], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});

module.exports = router;