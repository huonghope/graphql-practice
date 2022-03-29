const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
  createAuthor: async args => {
    const newAuthor = new Author(args)
      return await newAuthor.save()
  },
  getAuthorById: async (id) => await Author.findById(id),
  getAllAuthors: async () => await Author.find(),

  createBook: async args => {
    const newBook = new Book(args)
    return await newBook.save()
  },
  getBookById: async (id) => await Book.findById(id),
  getBooksByAuthorId: async (id) => await Book.find(id),
  getAllBooks: async () => await Book.find()
}

module.exports = mongoDataMethods