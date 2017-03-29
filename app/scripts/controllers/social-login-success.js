'use strict';

/**
 * @ngdoc function
 * @name angularSampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSampleApp
 */
angular.module('angularSampleApp')
  .controller('SocialLoginSuccessCtrl', function ($scope, $window) {

    $window.opener.socialLoginSuccess();
    $window.close();
  });
