'use strict';

/**
 * @ngdoc service
 * @name angularSampleApp.userService
 * @description
 * # userService
 * Factory in the angularSampleApp.
 */
angular.module('angularSampleApp')
  .factory('userService', function ($http, formService, authService, alerts) {

    var User = function(rawUser) {

      this.id = rawUser.id;
      this.name = rawUser.name;
      this.email = rawUser.email;
      this.roles = rawUser.roles;
      this.version = rawUser.version;
      this.unverified = rawUser.unverified;
      this.blocked = rawUser.blocked;
      this.admin = rawUser.admin;
      this.editable = rawUser.editable;
      this.rolesEditable = rawUser.rolesEditable;

    };

    User.prototype.rolesStr = function() {
      if (this.roles.length === 0)
        return "No special roles";
      return this.roles.join(', ');
    };

    User.prototype.editLink = function() {
      return '/users/' + this.id + '/edit';
    };

    User.prototype.changePasswordLink = function() {
      return '/users/' + this.id + '/change-password';
    };

    User.prototype.changeEmailLink = function() {
      return '/users/' + this.id + '/request-email-change';
    };

    // Public API here
    return {

      fetchById: function (id, into, as) {

        into[as] = null;

        $http.get(serverUrl + '/api/core/users/' + id + '/fetch-by-id')
          .success(function(rawUser, status, headers, config) {
            into[as] = new User(rawUser);
          })
          .error(function(data, status, headers, config) {
            alerts.addAlert("Error fetching user");
          });

      },

      fetchByEmail: function(email, form, onSuccess) {

        formService.submit(form, '/api/core/users/fetch-by-email', 'get', {
          data: {
            email: email
          },
          asParam: true,
          onSuccess: onSuccess
        });

      },

      resendVerificationMail: function(id) {

        if (!id)
          id = authService.user.id;

        $http
          .get(serverUrl + '/api/core/users/' + id + '/resend-verification-mail')
          .then(function () {
            alerts.addAlert("Mail sent. ");
          }, function (data) {
            alerts.addAlert("Couldn't send mail: " + JSON.stringify(data));
          });
      }
    };
  });
