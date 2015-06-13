angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {

  $scope.link = {};
  $scope.renderLink;
  $scope.userMessage = "";
  $scope.clicked = false;
  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function(res) {
      Links.getLinks()
        .then(function(linkResponse) {
          $scope.renderLink = linkResponse.data;
        });
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
