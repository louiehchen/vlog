var vlogController = angular.module('vlogController', []);
var weatherController = angular.module('weatherController', []);

vlogController.controller('vlogController', ['$scope','$http', function($scope, $http) {

  function getPosts(){
    $http.get('/posts_json').success(function(data){
      $scope.posts = data;
      // console.log(data)
    });
  };
  getPosts();
  $scope.orderProp = 'title';

}]);

weatherController.controller('weatherController', ['$scope', '$http', function($scope, $http){
  
  function getWeatherWithIp(){
    $http({
      method: 'GET',
      url: '/apps/weather/get-weather-data'
    }).then(function onSuccess(data){
      $scope.weather = [data.data];
      console.log(data)
    }, function onFail(error){
      console.log(error);
    });
  };

  getWeatherWithIp();

}]);
