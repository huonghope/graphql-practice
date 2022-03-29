import Container from 'react-bootstrap/Container'
import BookList from './components/BookList'
import Forms from './components/Forms'
// import { gql } from '@apollo/client'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphq',
	cache: new InMemoryCache()
})

// check 
// client
//   .query({
//     query: gql`
//       query getBooksQuery {
//         books {
//           name
//           id
//         }
//       }
//     `
//   })
//   .then(result => console.log(result)).catch(e => console.log(e));


function App() {


	return (
		<ApolloProvider client={client}>
			<Container className='py-3 mt-3' style={{ backgroundColor: 'lightcyan' }}>
				<h1 className='text-center text-info mb-3'>My Books</h1>
				<hr />
				<Forms />
				<hr />
				<BookList />
			</Container>
		</ApolloProvider>
	)
}

export default App