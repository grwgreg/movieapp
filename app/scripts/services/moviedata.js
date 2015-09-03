angular.module('mymovieApp')
  .service('movieData', ['$http', 'TMDB_KEY', 'TMDB_URL', function($http, TMDB_KEY, TMDB_URL) {
    return {
      get: function() {
        return $http.get(TMDB_URL + "discover/movie?sort_by=popularity.desc&api_key=" + TMDB_KEY)
      }
    };
  }]);
