define([
  'backbone',
  'json!config/api.json',
  'models/bookModel'
],

function (Backbone, api, BookModel) {
  'use strict';

  return Backbone.Collection.extend({
    model: BookModel,
    url: api.libraries,
    initialize: function () {
      console.log('initialize: librariesCollection');
    }
  });
});
