const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
  getAllAuthors: async () => await Author.find(),
  getAllBooks: async () => await Book.find()
}

module.exports = mongoDataMethods