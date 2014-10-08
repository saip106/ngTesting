(function () {
    'use strict';

    angular.module('ngTestingApp')
        .controller('LoginController', function ($scope, LoginService, $state, ToastrService) {
            var self = this;

            self.credentials = {
                username: '',
                password: ''
            };

            self.login = function (username, password) {

            }

        });

})();
