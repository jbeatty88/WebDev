var app = angular.module('app', []);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});

app.controller('myCtrl', function($scope, $http) {
  var campgrounds = [
    "Antelope Island",
    "Bear Lake",
    "Coral Pink Sand Dunes",
    "Dead Horse Point",
    "Deer Creek",
    "East Canyon",
    "Escalante Petrified Forest",
    "Fremont Indian",
    "Goblin Valley", 
    "Goosenecks"
  ];

  $scope.campgrounds = [
    "Antelope Island",
    "Bear Lake",
    "Coral Pink Sand Dunes",
    "Dead Horse Point",
    "Deer Creek",
    "East Canyon",
    "Escalante Petrified Forest",
    "Fremont Indian",
    "Goblin Valley", 
    "Goosenecks"
  ];
  var url = "https://ridb.recreation.gov/api/v1/recareas/";
  $scope.getCampsite = function(form) {
    
    console.log($scope.name);
    if($scope.name === campgrounds[0]) {
      // 14748 == Antelop Island
      id = "14748"
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/antelope.jpeg";
    }
    else if($scope.name === campgrounds[1]) {
      // 14749 == Bear Lake
      id = "14749";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/bearlake.jpg";
    }
    else if($scope.name === campgrounds[2]) {
      // 14750 == Coral Pink Sand Dunes 
      id = "14750";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/coralpink.jpeg";
    }
    else if($scope.name === campgrounds[3]) {
      // 14528 == Dead Horse Point 
      id = "14528";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/deadhorse.jpg";
    }
    else if($scope.name === campgrounds[4]) {
      // 15115 == Deer Creek
      id = "15115";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/deercreek.jpeg";
    }
    else if($scope.name === campgrounds[5]) {
      // 15105 == East Canyon
      id = "15105";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/eastcanyon.jpg";
    }
    else if($scope.name === campgrounds[6]) {
      // 14752 == Escalante Petrified Forest
      id = "14752";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/escalante.jpeg";
    }
    else if($scope.name === campgrounds[7]) {
      // 14753 == Fremont Indian
      id = "14753";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/fremont.jpg";
    }
    else if($scope.name === campgrounds[8]) {
      // 14754 == Goblin Valley
      id = "14754";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/goblin.jpg";
    }
    else if($scope.name === campgrounds[9]) {
      // 14755 == Goosenecks
      id = "14755";
      img = "/home/joshbeatty/Projects/WebDev/labs/Angular/goosenecks.jpg";
    }
    else {
      alert("Please enter a campground from the list");
    }
    url += id;
    url += "?full=true&apikey=52ed2f35-ba99-4fec-89e9-21572d23e9fb";
    $http.get(url,{jsonpCallbackParam:'callback'})
    .then(function(response) {
      console.log(url);
      $scope.campsiteName = response.data.RecAreaName;
      $scope.description = response.data.RecAreaDescription;
      // var img = "\'";
      // img += response.data.MEDIA[0].URL;
      // img += "\'";
      $scope.campsiteImg = img;
      $scope.campsiteLink = response.data.LINK[2].URL;
    }).catch(function() {
      console.log('ERROR WITH API');
    })
    $scope.name = "";
  }
});