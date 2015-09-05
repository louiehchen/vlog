var vlogControllers = angular.module('vlogControllers', []);

vlogControllers.controller('getPosts', function($scope, $http){
  $http.get('/posts_json').success(function(data){
    $scope.posts = data;
    // console.log(data)
  });
  // eventually order by created at
  $scope.orderProp = 'title';
});