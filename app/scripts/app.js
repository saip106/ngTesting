(function () {
    'use strict';

    angular
        .module('ngTestingApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ui.router'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('login', {
                    url: '/',
                    templateUrl : 'scripts/login/login.html',
                    controller : 'LoginController as controller'
                })
                .state('home', {
                    url: '/home',
                    templateUrl : 'scripts/home/home.html',
                    controller : 'HomeController as controller'
                });
        });

})();
