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
    vm.info = {loading: true};
    vm.loading = true;

    movieData.movie(vm).then(function(data) {
        console.log('single movie, ', data);
        setTimeout(function(){
          $scope.$apply(function() {
            vm.info = data;
            vm.loading = false;
          });
        },1000);//simulate slow load
      })
      .catch(function(e) {
        $log.error(e);
      });

  });
