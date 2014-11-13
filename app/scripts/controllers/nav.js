define([
  'marionette',
  'views/helloWorldItemView',
  'views/booksCollectionView',
  'models/helloWorldModel',
  'models/booksCollection'
],

function (Marionette, HelloWorldItemView, BooksCollectionView, HelloWorldModel, BooksCollection) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.contentRegion = options.contentRegion;
    },

    home: function () {
      return this.contentRegion.show(new HelloWorldItemView({
        model: new HelloWorldModel()
      }));
    },

    books: function () {
      var books = new BooksCollection();
      books.fetch();
      return this.contentRegion.show(new BooksCollectionView({
        collection: books
      }));
    },

    book: function (id) {
      debugger
      // TODO: Display BookItemView
    }
  });

  return NavController;
});
