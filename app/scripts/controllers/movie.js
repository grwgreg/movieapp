'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('MovieCtrl', function($stateParams, $scope, movieData, $log) {
    var vm = this;
    
    vm.ID = $stateParams.movieID;

  });
