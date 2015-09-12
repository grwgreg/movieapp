'use strict';

describe('Service: alertService', function () {

  // load the controller's module
  beforeEach(module('mymovieApp'));

  var alertService;
  beforeEach(inject(function (_alertService_) {
    alertService = _alertService_;
  }));

  var listeners = {
    a: function(){},
    b: function(){}
  }

  beforeEach(function() {
    spyOn(listeners,'a');
    spyOn(listeners,'b');
  });

  it('invokes callbacks with message when alert method is called', function () {
    alertService.onAlert(listeners.a); 
    alertService.onAlert(listeners.b); 
    alertService.alert('my alert msg');
    expect(listeners.a).toHaveBeenCalledWith('my alert msg');
    expect(listeners.b).toHaveBeenCalledWith('my alert msg');
  });

});
