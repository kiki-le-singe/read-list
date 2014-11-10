// server/app.js

////////////////
// BASE SETUP //
////////////////

// Stubs //
var timeline = require('./stubs/timeline.json');

// Module dependencies //
var application_root = __dirname,
    express = require('express'), // Web framework
    app = express(), // define server
    path = require('path'), // Utilities for dealing with file paths
    mongoose = require('mongoose'), //MongoDB integration
    bodyParser = require('body-parser'),
    port = process.env.PORT || 9000; // set our port

// Libraries Database //
var db = mongoose.connect('mongodb://localhost/libraries');

var book = mongoose.Schema({
  title: String,
  text: String,
  cover: String,
  published: Date,
  workers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Worker'
  }],
  comments: Number,
  favorites: Number,
  type: String
});

var worker = mongoose.Schema({
  firstname: String,
  lastname: String,
  pseudonym: String,
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }],
  type: String
});

var Book = mongoose.model('Book', book);
var Worker = mongoose.model('Worker', worker);

// parses request body and populates request.body
app.use(bodyParser());
// where to serve static content
app.use(express.static(path.join(application_root, '../app')));



////////////////////////
// ROUTES FOR OUR API //
////////////////////////

var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// Get a list of books
router.route('/libraries').get(function(req, res) {
  res.json(timeline);
});

// Get a book
router.route('/book/:id').get(function(req, res) {
  res.json({
    "title": "Invincible"
  });
});

// Get all books
router.route('/books').get(function(req, res) {
  Book.find().populate('workers').exec(function (err, books) {
    res.json(books);
  });
});

// Save a book
router.route('/book').post(function(req, res) {
  var book = new Book({
    title: 'Invincible',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet.',
    cover: './images/invincible.jpg',
    published: new Date(),
    comments: 15,
    favorites: 102,
    type: 'comics'
  });

  // book.save();
  book.save(function () {
    var bookId = book._id;

    var worker = new Worker({
      firstname: 'Robert',
      lastname: 'Kirkman',
      books: bookId,
      type: 'writer'
    });

    var worker2 = new Worker({
      firstname: 'Ryan',
      lastname: 'Ottley',
      books: bookId,
      type: 'artist'
    });

    var worker3 = new Worker({
      firstname: 'Bill',
      lastname: 'Crabtree',
      books: bookId,
      type: 'artist'
    });

    worker.save(function () {
      book.workers.push(worker);
      book.save();
      console.log("\n" + worker + ' saved');
    });

    worker2.save(function () {
      book.workers.push(worker2);
      book.save();
      console.log("\n" + worker + ' saved');
    });

    worker3.save(function () {
      book.workers.push(worker3);
      book.save();
      console.log("\n" + worker + ' saved');
    });

    res.send('processing the login form!');
  });
});

// all of our routes will be prefixed with /api
app.use('/api', router);



//////////////////////
// START THE SERVER //
//////////////////////

app.listen(port, function() {
  console.log('Express server listening on port %d in %s node', port, app.settings.env);
});
