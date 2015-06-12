angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.data.link = [];

  var init = function() {
    $scope.getLinks();
  };

  $scope.getLinks = function() {
    Links.getLinks().then(function(linkResponse) {
      $scope.data.links = linkResponse.data;
    });
  };

  init();
});
