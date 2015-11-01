'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:ChangePasswordCtrl
 * @description
 * # ChangePasswordCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('ChangePasswordCtrl', function ($scope, $routeParams, $location, authService, formService) {

    $scope.passwords = {
      oldPassword: '',
      password: '',
      retypePassword: ''
    };

    $scope.changePassword = function() {
      formService.submit($scope.form, '/api/core/users/' + $routeParams.id + '/change-password', 'post', {
        data: $scope.passwords,
        successMessage: 'Password changed successfully',
        onSuccess: function() {
          $location.url("/");
          if (authService.user.id === $routeParams.id)
            authService.changeUser(null);
        }
      });

    };
});
