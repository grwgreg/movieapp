'use strict';

/**
 * @ngdoc overview
 * @name mymovieApp
 * @description
 * # mymovieApp
 *
 * Main module of the application.
 */
angular
  .module('mymovieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('TMDB_URL', 'http://api.themoviedb.org/3/')
  .constant('TMDB_KEY', '4a042dded23569864e1aadcaee82417d');
