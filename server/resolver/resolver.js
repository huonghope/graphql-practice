// Define Data
const { books, authors } = require('../data/static')
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
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  }
}
module.exports = resolvers