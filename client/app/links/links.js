angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.data.link = [];

  var init = function() {
    $scope.getLinks();
  };

  $scope.getLinks = function() {
    console.log('Running getLinks');
    $http.get('/api/links')
      .success(function(data, status, headers, config) {
        $scope.data.links = data;
        console.log("Got links!");
      })
      .error(function(data, status, headers, config) {
        console.log("Error getting links!");
      });
  };

  init();
});
