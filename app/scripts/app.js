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
        resolve: {
          personResponse: function(movieData, $stateParams) {
            return movieData.person({personID: $stateParams.personID});
          }
        }
      })
      .state('person.details', {
        url: '/details',
        templateUrl: 'views/person/details.html',
        controller: 'PersonDetailsCtrl',
        controllerAs: 'details',
      })
      .state('person.credits', {
        url: '/credits',
        templateUrl: 'views/person/credits.html',
        controller: 'PersonCreditsCtrl',
        controllerAs: 'credits',
        resolve: {
          creditsResponse: function(movieData, $stateParams) {
            return movieData.credits({personID: $stateParams.personID});
          },
          slow: function($q) {
            return $q(function(resolve) {
              setTimeout(function() {resolve('hello')},3000);
            });
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope,$log, alertService) {
    //todo maybe create a model that you can toggle the loading value on and inject into top level ctrl instead of doing directly on rootscope?
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
      //todo make a service where you register states that require a tab loading class instead of a top level route loading class
      var toStateArr = toState.name.split('.');
      var fromStateArr = fromState.name.split('.');
      var isChildState = toStateArr.length > 1;
      //if navigating from person.details to person.credits then set loadingChildRoute
      //if navigating from movie to person.credits then set loadingRoute
      if (isChildState && toState.name !== 'person.details' && fromStateArr[0] === toStateArr[0]) {
        $rootScope.loadingChildRoute = true;
      } else if (toState && toState.resolve) {
        $rootScope.loadingRoute = true;
      }
    });
    $rootScope.$on('$stateChangeSuccess', function(e) {
      $rootScope.loadingRoute = false;
      $rootScope.loadingChildRoute = false;
    }); 
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (error.status === 404) {
        $rootScope.loadingRoute = false;
        $rootScope.loadingChildRoute = false;
        //todo, possibly use alert service for specific child route not found to display 404 in tabs container
        //instead of in a modal box, which may seem confusing to user
        $log.log('404 alert service here todo');//todo
        alertService.alert("404 Sorry this page wasn't found");
      }
      $log.warn('event', event);
      $log.error('error', error);
    });
  })
  .constant('TMDB_URL', 'http://api.themoviedb.org/3/')
  .constant('TMDB_KEY', '4a042dded23569864e1aadcaee82417d');
