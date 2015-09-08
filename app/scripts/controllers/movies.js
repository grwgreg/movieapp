'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('MoviesCtrl', function($stateParams, $scope, movieData, $log) {
    var vm = this;
    
    vm.loading = true;
    vm.page = 1;//route param maybe?
    vm.totalItems = 0;
    vm.results = [];
    vm.searchQuery = $stateParams.search;

    var moviesGetter = $stateParams.search ? 'search' : 'popular';

    vm.onPagination = function() {
      console.log('page ', vm.page);
      console.log('rparam ', $stateParams);
      vm.loading = true;
      vm.results = [];
      movieData[moviesGetter](vm).then(function(data) {
          console.log('yes', data);
          setTimeout(function(){
            $scope.$apply(function() {
              vm.results = data.results;
              vm.loading = false;
              vm.totalItems = data.total_results;
            });
          },1000);//simulate slow load
        })
        .catch(function(e) {
          $log.error(e);
        });
    };

   vm.onPagination();//initial load of data

/*
setInterval(function() {
          $scope.$apply(function() {
            vm.page++;
          });
}, 8000);
*/

  });
