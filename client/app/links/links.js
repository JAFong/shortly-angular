angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http, $location) {
  $scope.data = {};
  $scope.data.links = [];
  $scope.recentLink = function() {
    return $scope.data.links[$scope.data.links.length - 1];
  };
  var init = function() {
    $scope.getLinks();
    // $location.path('links');
  };

  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(linkResponse) {
      $scope.data.links = linkResponse.data;
    });
  };

  init();
});
