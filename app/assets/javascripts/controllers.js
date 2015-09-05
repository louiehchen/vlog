// var vlogControllers = angular.module('vlogControllers', []);

// function getPosts(){
//   $http.get('/posts_json').success(function(data){
//     $scope.posts = data;
//     // console.log(data)
//   });
// };

// vlogControllers.controller('getPosts', function($scope, $http){
//   // eventually order by created at
//   function getPosts(){
//     $http.get('/posts_json').success(function(data){
//       $scope.posts = data;
//       // console.log(data)
//     });
//   };
//   getPosts();
//   $scope.orderProp = 'title';
// });

angular.module('vlogApp', [])
  .controller('vlogControllers', function($scope, $http){

    function getPosts(){
      $http.get('/posts_json').success(function(data){
        $scope.posts = data;
        // console.log(data)
      });
    };
    getPosts();
    $scope.orderProp = 'title';

  });