'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:PeopleSearchCtrl
 * @description
 * # PeopleSearchCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('PeopleCtrl', function($anchorScroll, peopleResponse, $state, $stateParams) {
    var vm = this;
    
    vm.page = $stateParams.page || 1;
    vm.results = peopleResponse.results;
    vm.totalItems = peopleResponse.total_results;
    vm.onPagination = function() {
      $state.go('peoplepaginated', {page: vm.page, search: $stateParams.search});
      $anchorScroll();
    };

  });
