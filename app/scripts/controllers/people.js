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
      //todo, if the pagination link 404's it gets out of sync!!!
      //can possibly coordinate with alertService to rollback pagination state if 404?
      $state.go('peoplepaginated', {page: vm.page, search: $stateParams.search});
      $anchorScroll();
    };

  });
