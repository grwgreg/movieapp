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
        controllerAs: 'movies',
        resolve: {
          moviesResponse: function(movieData, $stateParams) {
            return movieData.popular({page: 1});
          }
        }
      })
      .state('paginated', {
        url: '/page/:page',
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies',
        resolve: {
          moviesResponse: function(movieData, $stateParams) {
            return movieData.popular({page: $stateParams.page});
          }
        }
      })
      .state('search', {
        url: '/search/:search',
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl',
        controllerAs: 'movies',
        resolve: {
          searchResponse: function(movieData, $stateParams) {
            return movieData.search({page: 1, searchQuery: $stateParams.search});
          }
        }
      })
      .state('searchpaginated', {
        url: '/search/:search/page/:page',
        templateUrl: 'views/movies.html',
        controller: 'SearchCtrl',
        controllerAs: 'movies',
        resolve: {
          searchResponse: function(movieData, $stateParams) {
            return movieData.search({page: $stateParams.page, searchQuery: $stateParams.search});
          }
        }
      })
      .state('movie', {
        url: '/movie/:movieID',
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie',
        resolve: {
          movieResponse: function(movieData, $stateParams) {
            return movieData.movie({movieID: $stateParams.movieID});
          }
        }
      })
      .state('people', {
        url: '/people/:search',
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people',
        resolve: {
          peopleResponse: function(movieData, $stateParams) {
            return movieData.people({page: 1, peopleQuery: $stateParams.search});
          }
        }
      })
      .state('peoplepaginated', {
        url: '/people/:search/page/:page',
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl',
        controllerAs: 'people',
        resolve: {
          peopleResponse: function(movieData, $stateParams) {
            return movieData.people({page: $stateParams.page, peopleQuery: $stateParams.search});
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope) {
    //todo maybe create a model that you can toggle this value on and inject into top level ctrl instead of doing directly on rootscope?
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
      if (toState && toState.resolve) {
        $rootScope.loadingRoute = true;
      }
    });
    $rootScope.$on('$stateChangeSuccess', function(e) {
      $rootScope.loadingRoute = false;
    }); 
  })
  .constant('TMDB_URL', 'http://api.themoviedb.org/3/')
  .constant('TMDB_KEY', '4a042dded23569864e1aadcaee82417d');
