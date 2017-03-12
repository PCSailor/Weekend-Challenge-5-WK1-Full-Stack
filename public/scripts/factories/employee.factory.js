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

  function addEmployee(sumNewEmployee) {
    $http({
      method: 'POST',
      url: '/employee',
      data: sumNewEmployee
    }).then(function(response){
      console.log(response);
      getEmployee();
    });
  }

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
    inactiveEmployee: inactiveEmployee
  };
}]);
