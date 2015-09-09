'use strict';

describe('Directive: movieSearch', function () {

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

  it('displays movie search form', function () {
    mockScope.query = 'the search query';
    mockScope.type = 'movies';
    mockScope.submit = function() {};

    var compileFn = compileService("<movie-search></movie-search>");
    var elem = compileFn(mockScope);
    mockScope.$digest();

    //ng-html2js karma plugin should prepopulate template cache!!
    var tmpl = $templateCache.get('/views/moviesearch.html');
    expect(tmpl).toBeTruthy();
    expect(elem.find("input[type='text']").length).toEqual(1);
  });

});
