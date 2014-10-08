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

            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('login', {
                    url: '/login',
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
