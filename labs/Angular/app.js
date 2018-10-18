var app = angular.module('app', []);
app.controller('myCtrl', function($scope, $http) {
  $scope.onup = function(form) {
    var url = "https://ridb.recreation.gov/api/v1/recareas/14528?full=true&apikey=0c62f553-bd83-4f1c-add1-4675368af5c6"; 
    $http.get(url).then(function(response) {
      $scope.gitstuff = response.data.RecAreaName;
    })
  }
});