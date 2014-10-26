define([
  'marionette',
  'views/helloWorldItemView',
  'views/LibrariesCollectionView',
  'models/helloWorldModel',
  'models/librariesCollection'
],

function (Marionette, HelloWorldItemView, LibrariesCollectionView, HelloWorldModel, LibrariesCollection) {
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

    libraries: function () {
      return this.contentRegion.show(new LibrariesCollectionView({
        collection: new LibrariesCollection()
      }));
    }
  });

  return NavController;
});
