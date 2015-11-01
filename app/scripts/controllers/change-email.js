'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:ChangeEmailCtrl
 * @description
 * # ChangeEmailCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('ChangeEmailCtrl', function ($scope, $http, $routeParams, $location, authService, alerts) {

    $scope.permitted = function () {
      return authService.isAuthenticated();
    };

    $scope.changeEmail = function() {
      $http.post(serverUrl + '/api/core/users/' + $routeParams.changeEmailCode + '/change-email')
        .success(function(data, status, headers, config) {

          alerts.setKind('success');
          alerts.addAlert('Email changed.');
          authService.changeUser(null);
        })
        .error(function(data, status, headers, config) {

          alerts.setKind('danger');
          alerts.addAlert('Changing email failed: ' + data.message);
        });
      $location.url("/");
    };
  });
