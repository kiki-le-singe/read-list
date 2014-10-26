define(function (require) {
  'use strict';
  return {
    'hello-world': require('hbs!tmpl/hello-world'),
    'library': require('hbs!tmpl/library')
  };
});
