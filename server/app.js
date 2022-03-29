const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Load Secheme from resolver
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// Create server ApolloServer
const app = express();

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.listen({port: 4000}, () => console.log(`gql path is http://localhost:4000${apolloServer.graphqlPath}`))