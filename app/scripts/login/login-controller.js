(function () {
    'use strict';

    angular.module('ngTestingApp')
        .controller('LoginController', function ($scope, LoginService, $state, ToastrService) {

            $scope.credentials = { username: '', password: ''};

            $scope.login = function (username, password) {

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
