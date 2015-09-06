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
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/search/:search', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/movie/:movieID', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('TMDB_URL', 'http://api.themoviedb.org/3/')
  .constant('TMDB_KEY', '4a042dded23569864e1aadcaee82417d');
