myApp.controller('EmployeeController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
  console.log('The EmployeeController was loaded');
  var self = this;
  self.newEmployee = {};
  self.employeeList = EmployeeFactory.allEmployee;

  self.addTask = function() {
    $http({
      method: 'POST',
      url: '/employee',
      data: self.newEmployee
    }).then(function(response){
      console.log(response);
      EmployeeFactory.updateEmployee();
      self.newEmployee = {};
    });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/employee/' + taskId
    }).then(function(response) {
      EmployeeFactory.updateEmployee();
    });
  }

  self.completeTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/employee/complete/' + taskId
    }).then(function(response) {
      EmployeeFactory.updateEmployee();
    });
  }

  self.uncompleteTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/employee/uncomplete/' + taskId  // TODO:
    }).then(function(response) {
      EmployeeFactory.updateEmployee();
    });
  }


}]);
