const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'On Way', 'Arrived'],
    default: 'Pending'
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;