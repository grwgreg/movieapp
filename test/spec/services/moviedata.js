'use strict';

describe('Service: movieData', function () {

  // load the controller's module
  beforeEach(module('mymovieApp'));

  var movieData;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_movieData_, _$httpBackend_) {
    movieData = _movieData_;
    $httpBackend = _$httpBackend_;
  }));

  it('has popular method', function () {
    $httpBackend.expect('GET', function(url) {
      url = url.split('?');
      var match = url[0] === 'http://api.themoviedb.org/3/discover/movie';
      match = match && ~url[1].indexOf('page=2');
      match = match && ~url[1].indexOf('sort_by=popularity.desc');
      return match;
    }).respond({});
    movieData.popular({page: 2});
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('has search method', function () {
    $httpBackend.expect('GET', function(url) {
      url = url.split('?');
      var match = url[0] === 'http://api.themoviedb.org/3/search/movie';
      match = match && ~url[1].indexOf('page=2');
      match = match && ~url[1].indexOf('query=batman');
      return match;
    }).respond({});
    movieData.search({page: 2, searchQuery: 'batman'});
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
  });

  it('has movie method', function () {
    $httpBackend.expect('GET', function(url) {
      url = url.split('?');
      var match = url[0] === 'http://api.themoviedb.org/3/movie/123123';
      return match;
    }).respond({});
    movieData.movie({ID: '123123'});
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
  });
});
