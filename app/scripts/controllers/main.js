'use strict';

/**
 * @ngdoc function
 * @name ngTestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTestingApp
 */
angular.module('ngTestingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
