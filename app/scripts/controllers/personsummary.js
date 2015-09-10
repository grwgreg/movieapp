'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:PersonSummaryCtrl
 * @description
 * # PersonSummaryCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('PersonSummaryCtrl', function($scope, $log) {
    var vm = this;

    //no clue what this popularity metric is out of? amy adams is 15
    vm.popularity = $scope.personData.popularity / 20 * 100;

    //the data for related movies is inconsistent
    vm.titleName = function(movie) {
      var title = movie.title || movie.name || movie.original_name || movie.original_title;
      return title;
    };

    vm.name = $scope.personData.name || $scope.personData.original_name;
  });
