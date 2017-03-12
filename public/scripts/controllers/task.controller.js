// <<<<<<< HEAD
myApp.controller('EmployeeController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
  console.log('EmployeeController is loaded');
// =======
// myApp.controller('TaskController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
//   console.log('The TaskController was loaded');
// >>>>>>> parent of d4d1dcf... adding functionality-buttons working
  var self = this;
  self.newTask = {};
  self.taskList = EmployeeFactory.allEmployees;

  self.addEmployee = function() {
    $http({
      method: 'POST',
      url: '/employee',
      data: self.newTask
    }).then(function(response){
      console.log(response);
      EmployeeFactory.updateEmployees();
      self.newTask = {};
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
// <<<<<<< HEAD
      url: '/employee/inactive/' + employeeId  // TODO:
// =======
//       url: '/employee/uncomplete/' + taskId  // TODO:
// >>>>>>> parent of d4d1dcf... adding functionality-buttons working
    }).then(function(response) {
      EmployeeFactory.updateEmployees();
    });
  }


}]);
