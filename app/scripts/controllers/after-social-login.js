'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('AfterSocialLoginCtrl', function ($scope, $window) {

    $window.opener.afterSocialLogin();
    $window.close();
  });
