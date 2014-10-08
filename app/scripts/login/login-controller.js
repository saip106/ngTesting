(function () {
    'use strict';

    angular.module('ngTestingApp')
        .controller('LoginController', function () {
            var self = this;

            self.credentials = {
                username: '',
                password: ''
            };

        });

})();
