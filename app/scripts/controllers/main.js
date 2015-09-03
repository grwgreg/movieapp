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

    movieData.get().success(function(data) {
        console.log('yes', data);
        setTimeout(function(){
          $scope.$apply(function() {
            vm.results = data.results
          });
        },5000);//simulate slow load
      })
      .error(function(e) {
        $log.error(e);
      });


  }]);
