define([
  'marionette'
],

function (Marionette) {
  'use strict';

  var Router = Marionette.AppRouter.extend({
    appRoutes: {
      'book/:id': 'book',
      books: 'books',
      '': 'home'
    }
  });

  return Router;
});
