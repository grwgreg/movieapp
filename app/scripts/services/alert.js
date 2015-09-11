'use strict';
angular.module('mymovieApp')
  .factory('alertService', function() {
    var listeners = [];
    //todo maybe unregister functionality
    return {
      alert: function(msg) {
        listeners.map(function(listener) {
          listener(msg);
        });
      },
      onAlert: function(fn) {
        listeners.push(fn);
      }
    };
  });
