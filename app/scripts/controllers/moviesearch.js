'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:MovieSearchCtrl
 * @description
 * # MovieSearchCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('MovieSearchCtrl', function($state, $scope, $log) {
    var vm = this;
    vm.query = '';//ngModel on text input
    vm.type = 'movies';//ngModel on radios
    vm.submit = function(query) {
      var route = vm.type === 'movies' ? 'search' : 'people';
      $state.go(route, {search: query});
    }
  });
