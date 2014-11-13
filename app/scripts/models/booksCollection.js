define([
  'backbone',
  'json!config/api.json',
  'models/bookModel'
],

function (Backbone, api, BookModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: BookModel,
    url: api.books,
    initialize: function () {
      console.log('initialize: booksCollection');
    }
  });
});
