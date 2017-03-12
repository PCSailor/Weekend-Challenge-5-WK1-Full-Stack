myApp.controller('EmployeeController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
  console.log('EmployeeController is loaded');
  var self = this;
  self.newEmployee = {};
  self.taskList = EmployeeFactory.allEmployees;

  self.addEmployee = function() {
    $http({
      method: 'POST',
      url: '/employee',
      data: self.newEmployee
    }).then(function(response){
      console.log(response);
      EmployeeFactory.updateEmployees();
      self.newEmployee = {};
    });
  }

  self.deleteEmployee = function(employeeId) {
    $http({
      method: 'DELETE',
      url: '/employee/' + employeeId
    }).then(function(response) {
      EmployeeFactory.updateEmployees();
    });
  }

  self.activeEmployee = function(employeeId) {
    $http({
      method: 'PUT',
      url: '/employee/active/' + employeeId
    }).then(function(response) {
      EmployeeFactory.updateEmployees();
    });
  }

  self.inactiveEmployee = function(employeeId) {
    $http({
      method: 'PUT',
      url: '/employee/inactive/' + employeeId  // TODO:
    }).then(function(response) {
      EmployeeFactory.updateEmployees();
    });
  }


}]);
