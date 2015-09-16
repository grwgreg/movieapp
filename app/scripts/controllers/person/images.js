'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:PersonImagesCtrl
 * @description
 * # PersonImagesCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('PersonImagesCtrl', function($stateParams, imagesResponse, $scope, movieData) {
    var vm = this;

    //this is bad
    //when I navigate directly to this child state, the parent's resolve function is never called, so the parent
    //controller never sets the data for the parent view
    //not sure if this is a UI Router issue or if I'm misusing it
    //quickfix is to just check if parent scope has been set yet, if not, make the ajax request here and set parent data
    if (!$scope.person.name) {
      movieData.person({personID: $stateParams.personID}).then(function(data) {
        $scope.person.setData(data);
      });
    }

    vm.images = imagesResponse.profiles;
    
  });
