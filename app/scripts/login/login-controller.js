(function () {
    'use strict';

    angular.module('ngTestingApp')
        .controller('LoginController', function ($state) {
            var self = this;

            self.credentials = {
                username: '',
                password: ''
            };

        });

})();
