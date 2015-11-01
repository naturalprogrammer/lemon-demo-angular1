'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:EditUserCtrl
 * @description
 * # EditUserCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('EditUserCtrl', function ($scope, $routeParams, $location, userService, formService, authService) {

    userService.fetchById($routeParams.id, $scope, 'user');

    $scope.update = function() {

      formService.submit($scope.form, '/api/core/users/' + $scope.user.id + '/update', 'post', {
        data: $scope.user,
        successMessage: 'Profile updated',
        onSuccess: function(currentUser){
          $location.url("/users/" + $routeParams.id);
          if (authService.user.id == $routeParams.id) // if the same user has logged in
            authService.user = currentUser;
        }});
    };

  });
