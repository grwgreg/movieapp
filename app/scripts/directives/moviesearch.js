'use strict';

/*
 *  * Directive for the movie/people search in the header
 *   */
angular.module('mymovieApp')
.directive('movieSearch', [function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/views/moviesearch.html',
    controller: 'MovieSearchCtrl',
    controllerAs: 'search'
  };  
}]);

