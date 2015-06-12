angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {

  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addLink(link);
  }

});
