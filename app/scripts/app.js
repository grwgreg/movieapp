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
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('movies', {
        url: '/',
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .state('search', {
        url: '/search/:search',
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .state('movie', {
        url: '/movie/:movieID',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      });
    $urlRouterProvider.otherwise('/');
  })
  .constant('TMDB_URL', 'http://api.themoviedb.org/3/')
  .constant('TMDB_KEY', '4a042dded23569864e1aadcaee82417d');
