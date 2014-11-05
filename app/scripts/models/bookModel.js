define([
  'backbone',
  'json!config/api.json'
],

function (Backbone, api) {
  'use strict';

  return Backbone.Model.extend({
    idAttribute: '_id',
    url: api.book,

    initialize: function () {
      console.log('initialize: bookModel');
    }
  });
});
