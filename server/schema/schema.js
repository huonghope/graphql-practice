// DATA standard
/**
 * Can use buildSchema to build
 * https://github.com/huonghope/yt-graphql-react-event-booking-api/blob/21-dataloader-improvements/graphql/schema/index.js
 */
const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author # Vì đã định nghĩa Author ở bên resolver lên sẽ run khi gọi đến hàm này (Khi nào nhìn thấy type Author -> go resolver)
  }

  type Author {
    id: ID! 
    name: String
    age: Int
    books: [Book] # Vì đã định nghĩa Book.books ở bên resolver lên sẽ run khi gọi đến hàm này (Khi nào nhìn thấy type Book -> go resolver)
  }

  # ROOT TYPE - GET DATA
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  # INSERT DATA
  type Mutation {
    # sẽ so sánh với Author và sẽ tự động thêm vào author
    # trong Author lạ có kiểu book -> sẽ so sánh xem có id book bằng với id của Author mới thêm không
    # return Author (4 trường)
    createAuthor(name: String, age: Int) : Author

    # tương tự như Author
    createBook(name: String, genre: String, authorId: ID!) : Book
  }
`;

module.exports = typeDefs;