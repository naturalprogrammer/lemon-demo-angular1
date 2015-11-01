'use strict';

/**
 * See http://stackoverflow.com/questions/25173132/angularjs-is-not-sending-x-xsrf-token
 *
 * @ngdoc service
 * @name angularSampleApp.XSRFInterceptor
 * @description
 * # XSRFInterceptor
 * Factory in the angularSampleApp.
 */
angular.module('appBoot')
  .factory('XSRFInterceptor', function ($log) {

    //var XSRFInterceptor = {
    //
    //  request: function(config) {
    //
    //    var token = $cookies.get('XSRF-TOKEN');
    //
    //    if (token) {
    //      config.headers['X-XSRF-TOKEN'] = token;
    //      $log.info("X-XSRF-TOKEN: " + token);
    //    }
    //
    //    return config;
    //  }
    //};

    var xsrfToken;

    var XSRFInterceptor = {

      request: function(config) {

        if (xsrfToken) {
          config.headers['X-XSRF-TOKEN'] = xsrfToken;
          $log.info("X-XSRF-TOKEN being sent to server: " + xsrfToken);
        }

        return config;
      },

      response: function(response) {

        var newToken = response.headers('X-XSRF-TOKEN');

        if (newToken) {
          xsrfToken = newToken;
          $log.info("X-XSRF-TOKEN received from server: " + xsrfToken);
        }

        return response;
      }
    };

    return XSRFInterceptor;
  });
