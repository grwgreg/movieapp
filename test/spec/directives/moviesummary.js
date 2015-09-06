'use strict';

describe('Directive: movieSummary', function () {

  //load templates via ng-html2js karma plugin
  beforeEach(module('templates'));
  // load the controller's module
  beforeEach(module('mymovieApp'));

var mockScope;
var compileService;
var $templateCache;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $compile, _$templateCache_) {
    mockScope = $rootScope.$new();
    compileService = $compile;
    $templateCache = _$templateCache_;
  }));

  it('displays movie data', function () {
    mockScope.result = {
      title: 'findmeplease',
      poster_path: 'myposterpath',
      id: 42,
      release_date: '05-17-1985',
      vote_average: '3'
    };

    var compileFn = compileService("<movie-summary movie-data='result'></movie-summary>");
    var elem = compileFn(mockScope);
    mockScope.$digest();

    //ng-html2js karma plugin should prepopulate template cache!!
    var tmpl = $templateCache.get('/views/moviesummary.html');
    expect(tmpl).toBeTruthy();
    expect(elem.find('h2 a').text()).toEqual('findmeplease');
  });

});
