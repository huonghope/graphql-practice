// Define Data
const { books, authors } = require('../data/static')
const Author = require('../models/Author')
const Book = require('../models/Book')


const resolvers = {
  // Query
  Query: {
    books: () => books,
    book: (parent, args) => books.find(book => book.id.toString() === args.id),
    authors: () => authors,
    author: (parent, args) => authors.find(author => authors.id.toString() === args.id),
  },
  // Khi trả lại type Book thì resolvers này sẽ chạy
  Book: {
    author: (parent, args) => authors.find(author => author.id.toString() === parent.authorId)
  },
  // Khi trả lại type Author thì resolvers này sẽ chạy
  Author: { 
    books: (parent, args) => books.filter(book => book.authorId.toString() === parent.id) 
  },

  // Mutation
  // Sẽ phải cần đưa vào cơ sở dữ liệu
  Mutation: {
    createAuthor: async (parent, args) => {
      console.log('[createAuthor]: ', args);
      const newAuthor = new Author(args)
      return await newAuthor.save()
    },
    createBook: async (parent, args) => {
      console.log('[createBook]: ', args);
      const newAuthor = new Author(args)
      const newBook = new Book(args)
      return await newBook.save()
    },
  }
}
module.exports = resolvers