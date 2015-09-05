//https://developers.themoviedb.org/3/discover
angular.module('mymovieApp')
  .service('movieData', function($resource, TMDB_KEY, TMDB_URL) {

    var MovieData = $resource(TMDB_URL,
      {},
      {
        popular: {
          method:'GET',
          url: TMDB_URL + 'discover/movie',
          params: {
            sort_by: 'popularity.desc',
            page: '1',
            api_key: TMDB_KEY
          },
          cache: true
        }
      }
    );

    return new MovieData();

  });
