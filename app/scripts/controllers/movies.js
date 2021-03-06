'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('MoviesCtrl', function($anchorScroll, moviesResponse, $state, $stateParams) {
    var vm = this;
    
    vm.page = $stateParams.page || 1;
    vm.results = moviesResponse.results;
    vm.totalItems = moviesResponse.total_results;
    vm.onPagination = function() {
      //todo, if the pagination link 404's it gets out of sync!!!
      //can possibly coordinate with alertService to rollback pagination state if 404?
      $state.go('paginated', {page: vm.page});
      $anchorScroll();
    };

  });
