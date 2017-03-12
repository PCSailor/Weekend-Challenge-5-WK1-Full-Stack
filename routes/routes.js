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
  console.log('routes.js/router.get/function ran');
  pool.connect(function(err, client, done) {
    if(err){
      console.log('routes.js/router.get/pool.connect error: ', err);
      res.sendStatus(500);
    }else{
      client.query('SELECT * FROM employee_salary_data ORDER BY status, id;', function(err, result) {
        done();
        if(err){
          console.log('routes.js/router.get/client.query error: ', err);
          res.sendStatus(500);
        }else{
          console.log('routes.js/router.get/client.query result.rows: ', result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

router.post('/', function(req, res) {
  console.log('routes.js/router.post/req.body: ', req.body);
// QUESTION: Switch code lines (var employeeObject = req.body;) with console.log above & all breaks??
    var employeeObject = req.body;
  pool.connect(function(err, client, done) {
    if(err){
      console.log('routes.js/router.post/pool.connect error: ', err);
      res.sendStatus(500);
    }else{
      // NOTE: INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-01', 'employee-first-01', 'CEO', 001, 400000);
      client.query('INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ($1, $2, $3, $4, $5);',
      [employeeObject.employeeData], function(err, result) {
        done();
        if(err){
          console.log('routes.js/router.post/client.query error: ', err);
          res.sendStatus(500);
        }else{
          res.sendStatus(201);
        }
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  var employeeToDeleteId = req.params.id;
  console.log('routes.js/router.delete/employeeToDeleteId: ', employeeToDeleteId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log('routes.js/router.delete/pool.connect error: ', err);
      res.sendStatus(500);
    }else{
      client.query('DELETE FROM employee_salary_data WHERE id=$1;',
      [employeeToDeleteId], function(err, result) {
        done();
        if(err){
          console.log('routes.js/router.delete/client.query error: ', err);
          res.sendStatus(500);
        }else{
          res.sendStatus(200);
        }
      });
    }
  });
});

router.put('/active/:id', function(req, res) {
  var employeeToactiveId = req.params.id;
  console.log('routes.js/router.put/employeeToactiveId: ', employeeToactiveId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log('routes.js/router.put/active/pool.connect error: ', err);
      res.sendStatus(500);
    }else{
      client.query('UPDATE employee_salary_data SET status=TRUE WHERE ID=$1;',
      [employeeToactiveId], function(err, result) {
        done();
        if(err){
          console.log('routes.js/router.put/active/client.query error: ', err);
          res.sendStatus(500); // the world exploded
        }else{
          res.sendStatus(200);
        }
      });
    }
  });
});

router.put('/inactive/:id', function(req, res) {
  var employeeToinactiveId = req.params.id;
  console.log('routes.js/router.put/employeeToactiveId: ', employeeToinactiveId);
  pool.connect(function(err, client, done) {
    if(err){
      console.log('routes.js/router.put/inactive/pool.connect error: ', err);
      res.sendStatus(500);
    }else{
      client.query('UPDATE employee_salary_data SET status=FALSE WHERE ID=$1;',
      [employeeToinactiveId], function(err, result) {
        done();
        if(err){
          console.log('routes.js/router.put/inactive/client.query error: ', err);
          res.sendStatus(500);
        }else{
          res.sendStatus(200);
        }
      });
    }
  });
});

module.exports = router;
