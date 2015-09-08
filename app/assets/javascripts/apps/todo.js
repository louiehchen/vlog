var todo = angular.module('todoController', []);

todo.controller('todoController', ['$scope', function($scope){
  $scope.todos = [
    {'title':'Test todo item', 'done':false}
  ];
  $scope.addItem = function(){
    $scope.todos.push({'title':$scope.newItem, 'done':false});
    $scope.newItem = "";
  };
  $scope.clearComplete = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.done
    })
  };
}]);