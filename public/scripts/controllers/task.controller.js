myApp.controller('TaskController', ['$http', 'TaskFactory', function($http, TaskFactory){
  console.log('The TaskController was loaded');
  var self = this;
  self.newTask = {};
  self.taskList = TaskFactory.allTasks;

  // TaskFactory.allTasks = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  // self.taskList = {
  //   list: [{name: 'sleep', id: 1}, {name: 'wake up', id: 2}]
  // }

  self.addTask = function() {
    $http({
      method: 'POST',
      url: '/employee',
      data: self.newTask
    }).then(function(response){
      console.log(response);
      TaskFactory.updateTasks();
      self.newTask = {};
    });
  }

  self.deleteTask = function(taskId) {
    $http({
      method: 'DELETE',
      url: '/employee/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }

  self.completeTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/employee/complete/' + taskId
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }

  self.uncompleteTask = function(taskId) {
    $http({
      method: 'PUT',
      url: '/employee/uncomplete/' + taskId  // TODO: 
    }).then(function(response) {
      TaskFactory.updateTasks();
    });
  }


}]);
