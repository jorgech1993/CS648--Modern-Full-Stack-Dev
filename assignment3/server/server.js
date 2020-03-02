//Importing express project
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');

const resolvers = {
	Query: {
		about: () => aboutMessage,
		productList,
	},
	Mutation: {
		setAboutMessage,
		productAdd,
	},
};

const productsDB = [];

function setAboutMessage(_, { message }) {
	return aboutMessage = message;
}

function productList() {
	return productsDB;
}

function productAdd(_, { product }) {
	product.id = productsDB.length + 1;
	console.log(product);
	productsDB.push(product);
	return product;
}

const server = new ApolloServer({
	typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
	resolvers,
});

const express = require('express');

//Initializing an app to the express project
const app = express();

// telling the application to use that directory
app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

// starts the server on port 3000 and it will output if successful
app.listen(3000, function(){
	console.log('App started on port 3000');
});