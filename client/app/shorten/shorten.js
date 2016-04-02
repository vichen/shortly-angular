angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // $scope.newLink = '';
  $scope.addLink = function() {
    Links.addOne($scope.newLink);    
  };
  
  // do we need to use $location
});
