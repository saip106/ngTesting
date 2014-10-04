'use strict';

/**
 * @ngdoc function
 * @name ngTestingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngTestingApp
 */
angular.module('ngTestingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
