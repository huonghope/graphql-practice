const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load Secheme from resolver
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// Create server ApolloServer
const app = express();

// Connect to MongoDB 
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://huong:MjycyazVJF8xdTtW@cluster0.riupw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
connectDB()
startServer();

app.listen({port: 4000}, () => console.log(`gql path is http://localhost:4000${apolloServer.graphqlPath}`))