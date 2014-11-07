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
  }]
});

var Book = mongoose.model('Book', book);
var Worker = mongoose.model('Worker', worker);
