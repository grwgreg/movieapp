'use strict';

describe('Controller: MoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('mymovieApp'));

  var MoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    var resolved = {};
    MoviesCtrl = $controller('MoviesCtrl', {
      $scope: scope,
      moviesResponse: {data:[]}
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
//    expect(MoviesCtrl.awesomeThings.length).toBe(3);
  });
});
