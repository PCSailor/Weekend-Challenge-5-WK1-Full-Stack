myApp.factory('EmployeeFactory', ['$http', function($http) {
  var factoryEmployee = { list: [] };
  getEmployee();

  function getEmployee() {
    $http({
      method: 'GET',
      url: '/employee'
    }).then(function(response) {
      console.log('response.data from factory: ', response.data);
      factoryEmployee.list = response.data;
    });
  }
// NOTE: Code good above



function addEmployee(sumNewEmployee) {  // NOTE: this line OR self.addEmployee = function() {
  $http({
    method: 'POST',
    url: '/employee',
    data: sumNewEmployee  // NOTE: this line OR data: self.newEmployee
  }).then(function(response){
    console.log(response);
    getEmployee();  // NOTE: this line OR EmployeeFactory.updateEmployees();
                    // NOTE: AND this line:  self.newEmployee = {};
  });
}

function deleteEmployee(employeeId) {  // NOTE: this line OR self.deleteEmployee = function(employeeId) {
  $http({
    method: 'DELETE',
    url: '/employee/' + employeeId
  }).then(function(response) {
    getEmployee();  // NOTE: this line OR EmployeeFactory.updateEmployees();
  });
}

function activeEmployee(employeeId) {  // NOTE: this line OR self.activeEmployee = function(employeeId) {
  $http({
    method: 'PUT',
    url: '/employee/active/' + employeeId
  }).then(function(response) {
  getEmployee();
  //  EmployeeFactory.updateEmployees();  // NOTE: this line OR just getEmployee();
  });
}

function inactiveEmployee(employeeId) {  // NOTE: this line OR self.inactiveEmployee = function(employeeId) {
  $http({
    method: 'PUT',
    url: '/employee/inactive/' + employeeId
  }).then(function(response) {
    getEmployee();
    //EmployeeFactory.updateEmployees();  // NOTE: this line OR just getEmployee();
  });
}


  return {
    // NOTE: Inside this return is the public API, if it's not in here, the controller won't see it

    allEmployees: factoryEmployee,
    updateEmployees: getEmployee,
    deleteEmployee: deleteEmployee,
    activeEmployee: activeEmployee,
    inactiveEmployee: inactiveEmployee
  };
}]);
