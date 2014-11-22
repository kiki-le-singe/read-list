# Marionette Boilerplate

## Introduction

> This project is first to train with tools like [GruntJS](http://gruntjs.com/), [Yeoman](http://yeoman.io/), [Backbone.js](http://backbonejs.org/), [Marionette.js](http://marionettejs.com/)...

## Requirements

 * [nodejs](http://nodejs.org/)
 * [GruntJS](http://gruntjs.com/)
 * [bower](http://bower.io/)
 * [compass](http://compass-style.org/)

## Optional

 * [Mongodb](http://www.mongodb.org/): **it's mandatory when the 'stub' mode is disabled**
  * [Install on Ubuntu](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/)
  * [Install on OS X](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 * [Yeoman](http://yeoman.io/): **required by [generator-marionette](https://github.com/mrichard/generator-marionette)**
 * [generator-marionette](https://github.com/mrichard/generator-marionette): Allows the use of **yo** command to generate **routers**, **models**, **views** ...

## Installation

* `$ git clone git@github.com/kiki-le-singe/read-list.git`
* `$ cd read-list`
* `$ npm install`
* `$ bower install`

## Grunt tasks

* `$ grunt serve`: **Requirements: mongodb, mongoose**

Then serve the app on `localhost:9000` and opens your default browser

* `$ grunt serve --stub`

Makes the same thing that the above command, except that the 'stub' option allows to enabled or not the retrieving of fake datas.

* `$ grunt test`

Runs tests located in `/tests/js/spec`.

> You can access tests in your browser, simply create a vhost.

## Included JavaScript libraries

 * [Backbone.js](http://backbonejs.org/)
 * [Marionette.js](http://marionettejs.com/)
 * [Backbone.babysitter](https://github.com/marionettejs/backbone.babysitter)
 * [Backbone.wreqr](https://github.com/marionettejs/backbone.wreqr)
 * [Require.js](http://requirejs.org/)
 * [jQuery 2](http://jquery.com/)
 * [Lo-Dash](http://lodash.com/)
 * [Handlebars](http://handlebarsjs.com/)
 * [Modernizr](http://modernizr.com/)

## API

By default the root access for the API is http://localhost:9000/api. Available example: http://localhost:9000/api/libraries

## Tests

The library used for tests are :

 * [mocha](http://visionmedia.github.io/mocha/)
 * [sinon](http://sinonjs.org/)
 * [chai](http://chaijs.com/)

## App configuration

The configuration of the application is located in `/app/config`

## Handlebars helpers

Handlebars helpers is located in `/app/scripts/helpers`

## Sources

 * [marionette-boilerplate](https://github.com/kiki-le-singe/marionette-boilerplate.git): **read-list** is based on it
