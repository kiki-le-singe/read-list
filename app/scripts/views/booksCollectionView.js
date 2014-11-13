define([
  'marionette',
  'views/bookItemView',
  'templates'
],

function (Marionette, BookItemView, templates) {
  'use strict';

  return Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'table-view books',
    childView: BookItemView,

    initialize: function () {
      console.log('initialize: booksCollectionView');
    }
  });
});
