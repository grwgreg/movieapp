'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  //.controller('PersonCtrl', function($stateParams, personResponse) {
  .controller('PersonCtrl', function($stateParams) {
    var vm = this;
    
    vm.tabData   = [
      {
        heading: 'Details',
        route:   'person.details'
      },
      {
        heading: 'Credits',
        route:   'person.credits'
      }
    ];

  });
