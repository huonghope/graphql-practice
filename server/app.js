const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// Load Secheme from resolver
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')


// Load db methods
const mongoDataMethods = require('./data/db')

// Create server ApolloServer
const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true
};
app.use(cors(corsOptions));

// Connect to MongoDB 
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://huong:${process.env.MONGODB}@cluster0.riupw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
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
        context: () => ({mongoDataMethods})
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({
        app,
        path: '/',
        cors: false, // disables the apollo-server-express cors to allow the cors middleware use
    })
    apolloServer.applyMiddleware({ app });
}
connectDB()
startServer();



app.listen({port: 4000}, () => console.log(`gql path is http://localhost:4000${apolloServer.graphqlPath}`))