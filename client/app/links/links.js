angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  if (Auth.isAuth) {
    Links.getAll()
      .then(function(response) {
        $scope.data = response;
      });
    
  }
});
