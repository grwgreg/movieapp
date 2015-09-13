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

    vm.setData(personResponse);
    
    vm.tabData   = [
      {
        heading: 'Details',
        route:   'person.details'
      },
      {
        heading: 'Credits',
        route:   'person.credits'
      }
    ];

  });
