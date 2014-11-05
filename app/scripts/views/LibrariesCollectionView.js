define([
  'marionette',
  'views/bookItemView',
  'templates'
],

function (Marionette, BookItemView, templates) {
  'use strict';

  return Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'table-view libraries',
    childView: BookItemView,

    initialize: function () {
      console.log('initialize: librariesCollectionView');
      this.collection.fetch();
    }
  });
});
