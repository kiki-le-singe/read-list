define([
  'marionette',
  'views/libraryItemView',
  'templates'
],

function (Marionette, LibraryItemView, templates) {
  'use strict';

  return Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'table-view libraries',
    childView: LibraryItemView,

    initialize: function () {
      console.log('initialize: librariesCollectionView');
      this.collection.fetch();
    }
  });
});
