'use strict';
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
        },
        search: {
          method:'GET',
          url: TMDB_URL + 'search/movie',
          params: {
            query: '',
            page: '1',
            api_key: TMDB_KEY
          },
          cache: true
        },
        movie: {
          method:'GET',
          url: TMDB_URL + 'movie/:movieID',
          params: {
            api_key: TMDB_KEY
          },
          cache: true
        },
        people: {
          method:'GET',
          url: TMDB_URL + 'search/person',
          params: {
            query: '',
            page: '1',
            api_key: TMDB_KEY
          },
          cache: true
        }
      }
    );

    var movieData = new MovieData();

    return {
      popular: function(params) {
        return movieData.$popular({page: params.page});
      },
      search: function(params) {
        return movieData.$search({page: params.page, query: params.searchQuery});
      },
      movie: function(params) {
        return movieData.$movie({movieID: params.movieID});
      },
      people: function(params) {
        return movieData.$people({page: params.page, query: params.peopleQuery});
      }
    };

  });
