angular.module('mymovieApp')
  .service('movieData', ['$http', 'TMDB_KEY', 'TMDB_URL', function($http, TMDB_KEY, TMDB_URL) {
    return {
      get: function(page) {
        //https://developers.themoviedb.org/3/discover
        return $http.get(TMDB_URL + "discover/movie?sort_by=popularity.desc&page=" + page + "&api_key=" + TMDB_KEY)
      }
    };
  }]);
