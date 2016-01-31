var vlogControllers = angular.module('vlogControllers', []);
var reubenController = angular.module('reubenController', []);
var reubenMapController = angular.module('reubenMapController', []);

vlogControllers.controller('vlogControllers', ['$scope','$http', function($scope, $http) {

  function getPosts(){
    $http.get('/posts_json').success(function(data){
      $scope.posts = data;
      // console.log(data)
    });
  };
  getPosts();
  $scope.orderProp = 'title';

}]);

// reubenController.controller('reubenController', ['$scope', '$http', function($scope, $http) {

//   function getReubens(){
//     $http.get('/reubens_json').success(function(data){
//       $scope.reubens = data;
//       // console.log(data);
//     });
//   };
//   getReubens();
//   $scope.orderProp = 'created_at';
// }]);


reubenMapController.controller('reubenMapController', ['$scope','$http', function ($scope, $http){
    function getReubens(){
      $http.get('/reubens_json').success(function(data){
        $scope.reubens = data;
        for (i = 0; i < data.length; i++){
          createMarker(data[i]);
        }
        console.log(data);
      });
    };
    var cities = getReubens();

    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(40.7078, -73.9770),
      // mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow({maxWidth: 300});

    var createMarker = function (info){
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.lat, info.lon),
        title: info.location
      });
      marker.content = '<div class="row">' + '<div class="infoWindowContent col-xs-9">' + info.desc + '</div>' + '<div class="col-xs-3"><img class="img-circle" src="assets/reuben" style="height: 50px; width: 50px;"></div></div><hr><a href="/reubens/' + info.id + '">Read Full Review</a>';

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
      });
      $scope.markers.push(marker);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    }

}]);