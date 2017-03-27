'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('ApiKeyCtrl', function ($scope, $routeParams, $http, userService, alerts) {

    userService.fetchById($routeParams.id, $scope, 'user');

    $scope.permitted = function() {
      return $scope.user && $scope.user.editable;
    };

    $scope.token = null;

    $scope.createApiKey = function() {
      if (confirm("This will remove any existing API key. Are you sure?")) {
        $http.post(serverUrl + '/api/core/users/' + $routeParams.id + '/api-key')
          .success(function (apiKeyData, status, headers, config) {
            $scope.apiKey = apiKeyData.apiKey;
          })
          .error(function (error, status, headers, config) {
            alerts.setKind('danger');
            alerts.addAlert("Error creating API key: " + error.message);
          });
      }
    }

    $scope.removeApiKey = function() {
      $http.delete(serverUrl + '/api/core/users/' + $routeParams.id + '/api-key')
        .success(function(tokenData, status, headers, config) {
          $scope.apiKey = null;
          alerts.setKind('success');
          alerts.addAlert("API key removed.");
        })
        .error(function(error, status, headers, config) {
          alerts.setKind('danger');
          alerts.addAlert("Error removing API key: " + error.message);
        });
    }
  });
