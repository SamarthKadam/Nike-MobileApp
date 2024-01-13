const dotenv=require('dotenv')
const path=require('path')
dotenv.config({path:path.join(__dirname,'../config.env')});
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Shoe=require('../models/shoeModel');
exports.makepayments=async (req, res) => {
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
      publishableKey:process.env.STRIPE_PUBLIC_KEY
    });
  }

  exports.getProducts=async(req,res)=>{

    const keyword=req.params.id?{$or:[{name:{$regex:req.params.id,$options:"i"}},{brand:{$regex:req.params.id,$options:"i"}}]}:{};
    const shoes=await Shoe.find(keyword);

    res.status(200).json({
        status:'success',
        shoes
    })
  }