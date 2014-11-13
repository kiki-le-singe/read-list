define([
  'handlebars'
],

function (Handlebars) {
  'use strict';

  Handlebars.registerHelper('is', function(value, test, options) {
    return (value && value === test) ? options.fn(this) : options.inverse(this);
  });
});
