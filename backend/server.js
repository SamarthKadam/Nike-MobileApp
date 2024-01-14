const express=require('express');
const dotenv=require('dotenv')
const app = express();
const schema=require('./graphql/schema');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphQL=require('express-graphql').graphqlHTTP
const router=require('./routes/router')
dotenv.config({path:'./config.env'});

const MONGO_URI = process.env.MONGO_URI;
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

app.use('/',router)
app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))



app.listen(4000,()=>{
    console.log("Listening to port 4000");
});