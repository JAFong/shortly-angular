angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {

  $scope.link = {};
  $scope.newLink = "";
  $scope.renderLink = "";
  $scope.userMessage = "";
  $scope.addLink = function() {
    Links.addLink($scope.newLink)
    .then(function(res) {
      $scope.renderLink = res;
      $scope.userMessage = 'Successfully shortened link!';
    })
    .catch(function(error) {
      console.error(error);
      console.dir(error.data);
      console.dir(error.config);
      $scope.userMessage = 'Error shortening link'
    })
  }

});
