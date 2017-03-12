myApp.controller('EmployeeController', ['EmployeeFactory', function(EmployeeFactory){
  console.log('EmployeeController.js is loaded');
  var self = this;
  self.newEmployee = {};
  self.employeeList = EmployeeFactory.allEmployees; // NOTE: This is the required code to bring in the full array

  self.addEmployee = function() {
    EmployeeFactory.addEmployee(self.newEmployee);
  }

  self.deleteEmployee = function(employeeId) {
    EmployeeFactory.deleteEmployee(employeeId);
  }

  self.activeEmployee = function(employeeId) {
    EmployeeFactory.activeEmployee(employeeId);
  }

  self.inactiveEmployee = function(employeeId) {
    EmployeeFactory.inactiveEmployee(employeeId);
  }
}]);
