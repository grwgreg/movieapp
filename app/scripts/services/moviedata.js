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
        },
        person: {
          method:'GET',
          url: TMDB_URL + 'person/:personID',
          params: {
            api_key: TMDB_KEY
          },
          cache: true
        },
        credits: {
          method:'GET',
          url: TMDB_URL + 'person/:personID/movie_credits',
          params: {
            api_key: TMDB_KEY
          },
          cache: true
        },
        images: {
          method:'GET',
          url: TMDB_URL + 'person/:personID/images',
          params: {
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
      },
      person: function(params) {
        return movieData.$person({personID: params.personID});
      },
      credits: function(params) {
        return movieData.$credits({personID: params.personID});
      },
      images: function(params) {
        return movieData.$images({personID: params.personID});
      }
    };

  });
