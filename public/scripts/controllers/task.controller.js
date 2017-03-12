// myApp.controller('EmployeeController', ['$http', 'EmployeeFactory', function($http, EmployeeFactory){
myApp.controller('EmployeeController', ['EmployeeFactory', function(EmployeeFactory){
  console.log('EmployeeController.js is loaded');
  var self = this;
  self.newEmployee = {};
  self.employeeList = EmployeeFactory.allEmployees; // NOTE: This is the required code to bring in the full list




// NOTE: Code added to replace $http code moved to factory further below
  self.addEmployee = function() {
    EmployeeFactory.addEmployee(self.newEmployee);
  }

// NOTE: Code moved to Factory
  // self.addEmployee = function() {
  //   $http({
  //     method: 'POST',
  //     url: '/employee',
  //     data: self.newEmployee
  //   }).then(function(response){
  //     console.log(response);
  //     EmployeeFactory.updateEmployees();
  //     self.newEmployee = {};
  //   });
  // }
// NOTE: END Code moved to Factory

// NOTE: Code added to replace $http code moved to factory further below
  self.deleteEmployee = function(employeeId) {
    EmployeeFactory.deleteEmployee(employeeId);
  }

  // NOTE: Code moved to Factory
  // self.deleteEmployee = function(employeeId) {
  //   $http({
  //     method: 'DELETE',
  //     url: '/employee/' + employeeId
  //   }).then(function(response) {
  //     EmployeeFactory.updateEmployees();
  //   });
  // }
// NOTE: END Code moved to Factory

// NOTE: Code added to replace $http code moved to factory further below
self.activeEmployee = function(employeeId) {
  EmployeeFactory.activeEmployee(employeeId);
}
self.inactiveEmployee = function(employeeId) {
  EmployeeFactory.inactiveEmployee(employeeId);
}
// NOTE: Code moved to Factory
  // self.activeEmployee = function(employeeId) {
  //   $http({
  //     method: 'PUT',
  //     url: '/employee/active/' + employeeId
  //   }).then(function(response) {
  //     EmployeeFactory.updateEmployees();
  //   });
  // }
  //
  // self.inactiveEmployee = function(employeeId) {
  //   $http({
  //     method: 'PUT',
  //     url: '/employee/inactive/' + employeeId
  //   }).then(function(response) {
  //     EmployeeFactory.updateEmployees();
  //   });
  // }
// NOTE: END Code moved to Factory

}]);
