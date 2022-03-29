const books = [
  {
    id: 1,
    name: 'Computer Science',
    genre: 'Tech',
    authorId: 1
  },
  {
    id: 1,
    name: 'Net Work',
    genre: 'Tech',
    authorId: 2
  }
]

const authors = [
  {
    id: 1,
    name: 'Jack',
    age: 34,
    books: [
      {
        id: 3,
        name: 'Computer Science II',
        genre: 'Tech',
        authorId: 1
      },{
        id: 4,
        name: 'Javascript',
        genre: 'Tech',
        authorId: 1
      }
    ]
  },
  {
    id: 2,
    name: 'Kim',
    age: 26
  },
  {
    id: 3,
    name: 'Houl',
    age: 23
  },
]

module.exports = { books, authors}