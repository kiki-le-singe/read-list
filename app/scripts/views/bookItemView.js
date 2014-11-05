define([
  'marionette',
  'templates'
],

function (Marionette, templates) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.book,
    tagName: 'li',
    className: 'table-view-cell media book',

    initialize: function () {
      console.log('initialize: bookItemView');
    }
  });
});
