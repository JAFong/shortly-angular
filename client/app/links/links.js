angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http, $location) {
  $scope.data = {};
  $scope.data.link = [];

  var init = function() {
    $scope.getLinks();
    $location.path('links');
  };

  $scope.getLinks = function() {
    Links.getLinks().then(function(linkResponse) {
      $scope.data.links = linkResponse.data;
    });
  };

  init();
});
