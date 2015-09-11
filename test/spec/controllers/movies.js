'use strict';

describe('Controller: MoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('mymovieApp'));

  var MoviesCtrl,
    scope;
  var $state = {
    go: function(){}
  };
  var $anchorScroll = {
    fn: function(){}
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    spyOn($state,'go');
    spyOn($anchorScroll, 'fn');
    MoviesCtrl = $controller('MoviesCtrl', {
      $scope: scope,
      moviesResponse: {data:[]},
      $state: $state,
      $stateParams: {page:3},
      $anchorScroll: $anchorScroll.fn
    });
  }));

  it('scrollsTop and redirects to new route when onPagination is invoked', function () {
    MoviesCtrl.onPagination();
    expect($state.go).toHaveBeenCalledWith('paginated', {page:3});
    expect($anchorScroll.fn).toHaveBeenCalled();
  });
});
