define(function (require) {
  'use strict';
  return {
    'hello-world': require('hbs!tmpl/hello-world'),
    'book': require('hbs!tmpl/book')
  };
});
