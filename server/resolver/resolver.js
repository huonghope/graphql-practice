// Define Data
const resolvers = {
  Query: {
    books: () => [
      {
        id: 1,
        name: 'Computer Science',
        genre: 'Tech'
      },
      {
        id: 1,
        name: 'Net Work',
        genre: 'Tech'
      }
    ]
  }
}
module.exports = resolvers