var vlogControllers = angular.module('vlogControllers', []);

vlogControllers.controller('vlogControllers', ['$scope','$http', function($scope, $http) {

  function getPosts(){
    $http.get('/posts_json').success(function(data){
      $scope.posts = data;
    });
  };
  getPosts();
  $scope.orderProp = 'title';
}]);