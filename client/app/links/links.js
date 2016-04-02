angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  Links.getAll();
  $scope.data = [];
  // $scope.links = Links.getAll();
});
