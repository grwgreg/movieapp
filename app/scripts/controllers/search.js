'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('SearchCtrl', function($anchorScroll, searchResponse, $state, $stateParams) {
    var vm = this;
    
    vm.page = $stateParams.page;
    vm.results = searchResponse.results;
    vm.totalItems = searchResponse.total_results;
    vm.onPagination = function() {
      $state.go('searchpaginated', {page: vm.page, search: $stateParams.search});
      $anchorScroll();
    };

  });
