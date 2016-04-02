angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.data.links;
  Links.getAll()
    .then(function(response) {
      $scope.data.links = response;
    });
});

// is test doing a fake GET with
// ... what is .respond? [{}, {}, {}];
