define(function (require) {
  'use strict';
  return {
    'hello-world': require('hbs!tmpl/hello-world'),
    'libraries': require('hbs!tmpl/libraries'),
    'library': require('hbs!tmpl/library')
  };
});
