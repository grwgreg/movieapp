'use strict';

/*
 *  * Directive for modal alert
 *   */
angular.module('mymovieApp')
.directive('modalAlert', function() {
  return {
    restrict: 'E',
    replace: true,
    controller: function($scope, alertService, $modal) {
      function openModal(msg) {
        $modal.open({
          animation: true,
          template: msg,
          size: 'sm',
        }); 
      };

      alertService.onAlert(openModal); 
    }
  };  
});

