(function () {
    'use strict';

    angular.module('ngTestingApp')
        .controller('LoginController', function ($state) {
            var self = this;

            self.credentials = {
                username: '',
                password: ''
            };

            self.login = function (username, password) {
                if(self.credentials.username === 'foo' && self.credentials.password === 'bar') {
                    $state.go('home');
                }
            }
        });

})();
