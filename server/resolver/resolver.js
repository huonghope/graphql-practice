// Define Data
// const { books, authors } = require('../data/static')
// const Author = require('../models/Author')
// const Book = require('../models/Book')

/**
 * https://github.com/huonghope/yt-graphql-react-event-booking-api/tree/21-dataloader-improvements/graphql/resolvers
 */

const resolvers = {
  // Query
  Query: {
    books: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllBooks(),
    book: async (parent, {id}, {mongoDataMethods}) => await mongoDataMethods.getBookById(id),
    authors: async (parent, args, {mongoDataMethods}) => await mongoDataMethods.getAllAuthors(),
    author: async (parent, {id}, {mongoDataMethods}) => await mongoDataMethods.getAuthorById(id),
  },
  // Khi trả lại type Book thì resolvers này sẽ chạy
  Book: {
    author: async ({authorId}, args,{mongoDataMethods}) => await mongoDataMethods.getAuthorById(authorId)
  },
  // Khi trả lại type Author thì resolvers này sẽ chạy
  Author: { 
    books: async ({id}, args, {mongoDataMethods}) => await mongoDataMethods.getBooksByAuthorId(id),
  },

  // Mutation
  // Sẽ phải cần đưa vào cơ sở dữ liệu
  Mutation: {
    createAuthor: async (parent, args, {mongoDataMethods}) => {
      await mongoDataMethods.createAuthor(args)
    },
    createBook: async (parent, args, {mongoDataMethods}) => {
      console.log(args)
      await mongoDataMethods.createBook(args)
    },
  }
}
module.exports = resolvers