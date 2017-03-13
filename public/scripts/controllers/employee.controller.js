myApp.controller('EmployeeController', ['EmployeeFactory', function(EmployeeFactory){
  console.log('EmployeeController.js is loaded');
  var self = this; // NOTE: self here = ec in index.html
  self.newEmployee = {};  // NOTE: object connected to html form // user entry fields
  self.employeeList = EmployeeFactory.allEmployees; // NOTE: replaced by array AND this is the required code to bring in the full array



// NOTE: if it's teid to DOM, start with self.






// console.log('self = ', self); // NOTE: self.employeeList.list[0]
// console.log('typeof self = ', typeof self); // NOTE: is an object
// console.log('self.employeeList.list[0] = ', self.employeeList.list[0]); // NOTE: is undefined
// console.log('typeof self.employeeList.list = ', typeof  self.employeeList.list);  // NOTE: is an object
// console.log('typeof self.employeeList.list[0] = ', typeof  self.employeeList.list[0]); // NOTE: is undefined
// console.log('self.newEmployee = ', self.newEmployee); // NOTE: is an empty object
// console.log('typeof self.newEmployee = ', typeof self.newEmployee); // NOTE: is an object
// console.log('self.employeeList = ', self.employeeList); // NOTE: an object with the complete list as an array
// console.log('type self.employeeList = ', typeof self.employeeList); // NOTE: is an object
  self.monthlySalary = 0;

  self.addEmployee = function(newEmployee) {
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

  // self.calculate = function(){
  //   var totalSalary = 0;
  //   for (var i = 0; i < self.activeEmployeeList.list.length; i++) {
  //     totalSalary += self.activeEmployeeList.list[i].annual_salary;
  //   }
  //   self.monthlyExpenditure = totalSalary/12;
  //   return self.monthlyExpenditure
  // }


}]);
