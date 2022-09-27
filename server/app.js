const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongodb
mongoose.connect('mongodb+srv://Your db string');
mongoose.connection.once('open', () => {
    console.log('Connected to DB');
});

const PORT = 4000;

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Now listening for requests on port ${PORT}`)
});