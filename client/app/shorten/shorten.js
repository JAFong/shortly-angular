angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {

  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addLink(link);
  }

  // $scope.addLink = function() {
  //   $http.post('/api/links', {links: $location})
  //   .success(function(data, status, headers, config) {
  //     console.log(data);
  //     console.log("Link added!")
  //   })
  //   .error(function(data, status, headers, config) {
  //     console.log("Could not post!")
  //   })
  // };

});
