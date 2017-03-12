var myApp = angular.module('TaskApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/todoList', {
      templateUrl: '/views/todoList.html',
// <<<<<<< HEAD
      controller: 'EmployeeController',
      // controllerAs: 'ec'
// =======
      // controller: 'TaskController',
      controllerAs: 'tc'
// >>>>>>> parent of d4d1dcf... adding functionality-buttons working
    })
    .when('/about', {
      templateUrl: '/views/about.html',
      controller: 'AboutController',
      controllerAs: 'ac'
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
