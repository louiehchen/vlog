var vlogControllers = angular.module('vlogControllers', []);

vlogControllers.controller('demoList', function($scope){
  $scope.dogs = [
    {
      'name': 'Barnum',
      'age': 5
    },
    {
      'name': 'Babi',
      'age': 10
    },
    {
      'name': 'Jack',
      'age': 7
    }
  ];
  $scope.orderProp = 'age';
});

vlogControllers.controller('backendTest', function($scope, $http){
  $http.get('/posts_json').success(function(data){
    $scope.posts = data;
  });
  $scope.orderProp = 'title';
});