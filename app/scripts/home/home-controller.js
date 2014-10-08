'use strict';

angular.module('ngTestingApp')
    .controller('HomeController', function ($http) {
        var self = this;

        self.repositories = ['foo', 'bar'];
        self.loadRepositories = function () {
            $http.get('/data/sample.json').success(function (response) {
                self.repositories = response;
            })
        };
    });
