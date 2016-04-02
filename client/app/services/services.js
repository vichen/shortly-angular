angular.module('shortly.services', [])

.factory('Links', function ($http) {
  
  var getAll = function() {

    return $http.get('/api/links')
      .then(function(response) {
        console.log('GET response: ', response.data);
        return response.data;
      })
      .catch(function(err) {
        console.log('getLink error: ', err);
      });
  };

  var addOne = function(link) {

    console.log('addOne, link: ', link);

    return $http({
      method: 'POST',
      url: '/api/links',
      data: link // { url: link } ?
    });
      //'/api/links', { url: link })
    //   .then(function(response) {
    //     return response;
    //   });
  };

  return {
    getAll: getAll,
    addOne: addOne
  };
})




.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {

  console.log('in isAuth');

    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
