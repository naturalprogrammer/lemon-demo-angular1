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
  .factory('XSRFInterceptor', function ($cookies, $log) {

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

        var newToken = $cookies.get('XSRF-TOKEN');

        if (newToken) {
          xsrfToken = newToken;
          $log.info("XSRF-TOKEN received from server: " + xsrfToken);
        }

        return response;
      }
    };

    return XSRFInterceptor;
  });
