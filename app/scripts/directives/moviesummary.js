'use strict';

/*
 *  * Directive for a movie summary, displayed in search results
 *   */
angular.module('mymovieApp')
.directive('movieSummary', [function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      movieData: '='//todo would individual @'s be better? don't need 2way binding
    },  
    templateUrl: '/views/moviesummary.html',
    controller: 'MovieSummaryCtrl',
    controllerAs: 'summary'
  };  
}]);

