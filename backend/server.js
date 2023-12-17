const express=require('express');
const dotenv=require('dotenv')
const app = express();
const schema=require('./models/schema')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphQL=require('express-graphql').graphqlHTTP
dotenv.config({path:'./config.env'});


const MONGO_URI = 'mongodb+srv://samarthskadam14:Xrkuv9Nn9zLAV8fo@lyricsapplication.iczr8p2.mongodb.net/';
if (!MONGO_URI) {
    throw new Error('You must provide a Mongo Atlas URI');
}

mongoose.connect(MONGO_URI);
mongoose.connection
.once('open', () => console.log('Connected to Mongo Atlas instance.'))
.on('error', (error) =>
console.log('Error connecting to Mongo Atlas:', error)
);

app.use(bodyParser.json());

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))


app.listen(4000,()=>{
    console.log("Listening to port 4000");
});