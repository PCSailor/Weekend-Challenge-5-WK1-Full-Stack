myApp.factory('EmployeeFactory', ['$http', function($http) {

  var factoryEmployee = { list: [] };

  getEmployee();

  function getEmployee() {
    $http({
      method: 'GET',
      url: '/employee'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryEmployee.list = response.data;
      // factoryTasks = {
      //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
      // }
    });
  }

  // this is the public API, if it's not in here, your controller won't see it
  return {
    allEmployees: factoryEmployee,
    updateEmployees: getEmployee
  };
}]);
