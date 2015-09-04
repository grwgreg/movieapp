'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('MainCtrl', ['$scope', 'movieData', '$log', function($scope, movieData, $log) {
    var vm = this;
    
    vm.loading = true;
    vm.page = 1;//route param maybe?

    vm.onPagination = function() {
console.log('page ', this.page);
    };

setInterval(function() {
          $scope.$apply(function() {
            vm.page++;
          });
}, 8000);

    movieData.get().success(function(data) {
        console.log('yes', data);
        setTimeout(function(){
          $scope.$apply(function() {
            vm.results = data.results
            vm.loading = false;
          });
        },5000);//simulate slow load
      })
      .error(function(e) {
        $log.error(e);
      });


  }]);
