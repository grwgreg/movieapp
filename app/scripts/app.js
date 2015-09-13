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
    'ui.router',
    'ui.router.tabs'
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
      })
      .state('person', {
        url: '/person/:personID',
        templateUrl: 'views/person/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person',
/*
        resolve: {
          peopleResponse: function(movieData, $stateParams) {
            return movieData.people({page: $stateParams.page, peopleQuery: $stateParams.search});
          }
        }
*/
      })
      .state('person.details', {
        url: '/details',
        templateUrl: 'views/person/details.html',
        controller: 'PersonDetailsCtrl',
        controllerAs: 'details',
/*
        resolve: {
          peopleResponse: function(movieData, $stateParams) {
            return movieData.people({page: $stateParams.page, peopleQuery: $stateParams.search});
          }
        }
*/
      })
      .state('person.credits', {
        url: '/credits',
        templateUrl: 'views/person/credits.html',
        controller: 'PersonCreditsCtrl',
        controllerAs: 'credits',
/*
        resolve: {
          peopleResponse: function(movieData, $stateParams) {
            return movieData.people({page: $stateParams.page, peopleQuery: $stateParams.search});
          }
        }
*/
      });
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope,$log, alertService) {
    //todo maybe create a model that you can toggle this value on and inject into top level ctrl instead of doing directly on rootscope?
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
      if (toState && toState.resolve) {
        $rootScope.loadingRoute = true;
      }
    });
    $rootScope.$on('$stateChangeSuccess', function(e) {
      $rootScope.loadingRoute = false;
    }); 
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error.status === 404) {
        $rootScope.loadingRoute = false;
        $log.log('404 alert service here todo');//todo
        alertService.alert("404 Sorry this page wasn't found");
      }
      $log.warn('event', event);
      $log.error('error', error);
    });
  })
  .constant('TMDB_URL', 'http://api.themoviedb.org/3/')
  .constant('TMDB_KEY', '4a042dded23569864e1aadcaee82417d');
