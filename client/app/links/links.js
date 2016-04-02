angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.data.links = Links.getAll();
  // $scope.links = Links.getAll();
});
