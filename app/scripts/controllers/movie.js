'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('MovieCtrl', function($stateParams, movieResponse) {
    var vm = this;
    
    vm.info = movieResponse;

  });
