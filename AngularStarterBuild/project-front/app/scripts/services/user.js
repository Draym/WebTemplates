'use strict';

/**
 * @ngdoc service
 * @name SWmanagerApp.user
 * @description
 * # user
 * Factory in the SWmanagerApp.
 */
angular.module('projectApp')
    .factory('User', function ($cookies, DateTools) {
        // Service logic
        var idUser = "user";
        var idToken = "token";
        var timeOut = 360;

        function connect(user, token) {
            $cookies.put(idUser, user, {
                expires: DateTools.addMinutesToCurrentDate(timeOut)
            });
            $cookies.put(idToken, token, {
                expires: DateTools.addMinutesToCurrentDate(timeOut)
            });
        }

        function update(token) {
            var userLogin = $cookies.get(idUser);

            if (userLogin) {
                connect(userLogin, token);
            }
        }

        function disconnect() {
            $cookies.remove(idUser);
            $cookies.remove(idToken);
        }

        // Public API here
        return {
            getUser: function () {
                return $cookies.get(idUser);
            },
            getToken: function () {
                return $cookies.get(idToken);
            },
            update: function (token) {
                update(token);
            },
            isConnected: function () {
              return !(!$cookies.get(idToken));
            },
            connect: function (user, token) {
                connect(user, token);
            },
            disconnect: function () {
                disconnect();
            }
        };
    });
