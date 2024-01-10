const express=require('express');
const dotenv=require('dotenv')
const app = express();
const schema=require('./graphql/schema');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressGraphQL=require('express-graphql').graphqlHTTP
const stripe = require('stripe')('sk_test_51OX1GUSCbdDR2hHNsBPlJkEV6YKc50NTg8ijSMa8TWhzl70khlhVMHFYu1Id3VEKYv3BhYbeFS2XK4eJDH3URTTD00MaksKEtj');
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

app.post('/payment-sheet', async (req, res) => {

    console.log(req.body);
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2023-10-16'}
    );
    const val=parseInt(req.body.price)
    const IndianPrice=val*100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: IndianPrice,
      currency: 'inr',
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: 'pk_test_51OX1GUSCbdDR2hHNUtJOH4ZnvAovfSZ2zQcssKY81dEX5beDqcR5dTdxLNBFcR0y1CD6JcojnnNl8Jo4kFt4ZwJL00sOejVhCK'
    });
  });
  

app.use('/graphql',expressGraphQL({
    schema,
    graphiql:true
}))



app.listen(4000,'192.168.1.12',()=>{
    console.log("Listening to port 4000");
});