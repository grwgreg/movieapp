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

      }
    );

    var movieData = new MovieData();

    //todo is passing in whole vm bad? thing is different functions may take different params
    //but ideally i want just 1 function call based on the route
    //alternative is multiple controllers and duplicated code...
    return {
      popular: function(vm) {
        return movieData.$popular({page: vm.page});
      },
      search: function(vm) {
        return movieData.$search({page: vm.page, query: vm.searchQuery});
      },
    };

  });
