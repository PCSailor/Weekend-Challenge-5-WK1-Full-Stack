myApp.factory('EmployeeFactory', ['$http', function($http) {
  var factoryEmployee = { list: [] };

  var self = this; // NOTE: self here = ec in index.html
  self.newEmployee = {};  // NOTE: user entry fields

  getEmployee();

  function getEmployee() {
    $http({
      method: 'GET',
      url: '/employee'
    }).then(function(response) {
      console.log('response.data from factory: ', response.data);
      factoryEmployee.list = response.data;  // NOTE: angJS adds alot with response alone so data pulls just result from server
    });
  }

  function addEmployee(newEmployee) {
    console.log('employee.factory.js/function addEmployee: ', self.addEmployee);
    $http({
      method: 'POST',
      url: '/employee/addEmployee',
      data: newEmployee
    }).then(function(response){
      console.log(response);
      getEmployee();
    });
  }
  // NOTE: This PUT ties in with <button ng-click="bk.editBook(book)">Save</button>.  Like the function example below, bookToEdit is replaced

  function deleteEmployee(employeeId) {
    $http({
      method: 'DELETE',
      url: '/employee/' + employeeId
    }).then(function(response) {
      getEmployee();
    });
  }

  function activeEmployee(employeeId) {
    $http({
      method: 'PUT',
      url: '/employee/active/' + employeeId
    }).then(function(response) {
      getEmployee();
    });
  }

  // QUESTION: From Books(phi-pg-update-delete-angjs-convert-books).  Notice .id differences
  // NOTE: This PUT ties in with <button ng-click="bk.editBook(book)">Save</button>.  Like the function example below, bookToEdit is replaced
//   self.editBook = function(bookToEdit){
//   $http({
//     method: 'PUT',
//     url: '/books/edit/' + bookToEdit.id,
//     data: bookToEdit
//   }).then(function(response){
//     getBooks();
//   });
// }

  function inactiveEmployee(employeeId) {
    $http({
      method: 'PUT',
      url: '/employee/inactive/' + employeeId
    }).then(function(response) {
      getEmployee();
    });
  }

  return {
    // NOTE: Inside this return is the public API, if it's not in here, the controller won't see it
    allEmployees: factoryEmployee,
    updateEmployees: getEmployee,
    deleteEmployee: deleteEmployee,
    activeEmployee: activeEmployee,
    inactiveEmployee: inactiveEmployee,
    addEmployee: addEmployee
  };
}]);
