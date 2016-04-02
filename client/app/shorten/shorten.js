angular.module('shortly.shorten', ['shortly.services'])



.controller('ShortenController', function ($scope, $location, Links) {
  // $scope.newLink = '';
  $scope.link = {};
  $scope.addLink = function() {
    console.log('link: ', $scope.linkInput);
    Links.addOne(JSON.stringify(
      {url: $scope.linkInput}
      ));
  };
});
