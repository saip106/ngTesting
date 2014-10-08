(function () {
    'use strict';

    angular.module('ngTestingApp')
        .controller('LoginController', function ($scope, LoginService, $state, ToastrService) {
            var self = this;

            self.credentials = { username: '', password: ''};

            self.login = function (username, password) {
                ToastrService.info('logging in');
                LoginService.login(username, password)
                    .then(function () {
                        $state.go('home');
                        ToastrService.success('hey, you are in...');
                    }, function () {
                        ToastrService.error('something went wrong...');
                    });
            }

        });

})();
