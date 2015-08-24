var vlogControllers = angular.module('vlogControllers', []);

vlogControllers.controller('backendTest', function($scope, $http){
  $http.get('/posts_json').success(function(data){
    $scope.posts = data;
  });
  // eventually order by created at
  $scope.orderProp = 'title';
});