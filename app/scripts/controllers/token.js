'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('TokenCtrl', function ($scope, $routeParams, $http, userService, alerts) {

    userService.fetchById($routeParams.id, $scope, 'user');

    $scope.permitted = function() {
      return $scope.user && $scope.user.editable;
    };

    $scope.token = null;

    $scope.createToken = function() {
      if (confirm("This will remove any existing token. Are you sure?")) {
        $http.post(serverUrl + '/api/core/users/' + $routeParams.id + '/token')
          .success(function (tokenData, status, headers, config) {
            $scope.token = tokenData.token;
          })
          .error(function (error, status, headers, config) {
            alerts.setKind('danger');
            alerts.addAlert("Error creating token: " + error.message);
          });
      }
    }

    $scope.removeToken = function() {
      $http.delete(serverUrl + '/api/core/users/' + $routeParams.id + '/token')
        .success(function(tokenData, status, headers, config) {
          $scope.token = null;
          alerts.setKind('success');
          alerts.addAlert("Token removed.");
        })
        .error(function(error, status, headers, config) {
          alerts.setKind('danger');
          alerts.addAlert("Error removing token: " + error.message);
        });
    }
  });
