'use strict';

/**
 * @ngdoc function
 * @name mymovieApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the mymovieApp
 */
angular.module('mymovieApp')
  .controller('PersonCtrl', function($stateParams, personResponse) {
    var vm = this;

    vm.setData = function(data) {
      vm.name = personResponse.name;
      vm.biography = personResponse.biography;
      vm.birthday = personResponse.birthday;
      vm.deathday = personResponse.deathday;
      vm.place_of_birth = personResponse.place_of_birth;
      vm.profile_path = personResponse.profile_path;
      vm.popularity = personResponse.popularity;
    };

    //do it this way because this controller won't load when child route controller is directly
    //navigated to. we have to get the person data from child controller and call this fn
    //ie from child ctrl, $scope.person.setData(theAjaxResponseForSinglePerson)
    //todo, see if theres a better way to do this, child ctrl shouldn't be aware of parent imo
    vm.setData(personResponse);
    
    vm.tabData   = [
      {
        heading: 'Details',
        route:   'person.details'
      },
      {
        heading: 'Credits',
        route:   'person.credits'
      },
      {
        heading: 'Images',
        route:   'person.images'
      }
    ];

  });
