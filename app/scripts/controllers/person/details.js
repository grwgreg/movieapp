'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:PersonDetailsCtrl
 * @description
 * # PersonDetailsCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('PersonDetailsCtrl', function($stateParams) {
    var vm = this;
    
    vm.info = 'details';

  });
