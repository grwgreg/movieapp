'use strict';

/*
 *  * Directive for a person summary, displayed in search results
 *   */
angular.module('mymovieApp')
.directive('personSummary', [function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      personData: '='//todo would individual @'s be better? don't need 2way binding
    },  
    templateUrl: '/views/personsummary.html',
    controller: 'PersonSummaryCtrl',
    controllerAs: 'summary'
  };  
}]);

