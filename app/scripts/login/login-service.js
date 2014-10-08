(function () {
    'use strict';

    angular.module('ngTestingApp')
        .factory('LoginService', function ($q, $timeout) {
            return {
                login: function (username, password) {

                    var deferred = $q.defer();

                    $timeout(function () {
                        if(username === 'guest' && password === 'guest') {
                            deferred.resolve();
                        }
                        else {
                            deferred.reject();
                        }
                    }, 1000);
                    return deferred.promise;
                }
            }
        });
})();
