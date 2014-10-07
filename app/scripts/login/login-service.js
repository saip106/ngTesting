(function () {
    'use strict';

    angular.module('ngTestingApp')
        .factory('LoginService', function () {
            return {
                login: function (username, password) {
                    if(username === 'guest' && password === 'guest') {
                        return true;
                    }
                }
            }
        });
})();
