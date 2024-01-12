const stripe = require('stripe')('sk_test_51OX1GUSCbdDR2hHNsBPlJkEV6YKc50NTg8ijSMa8TWhzl70khlhVMHFYu1Id3VEKYv3BhYbeFS2XK4eJDH3URTTD00MaksKEtj');
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
      publishableKey: 'pk_test_51OX1GUSCbdDR2hHNUtJOH4ZnvAovfSZ2zQcssKY81dEX5beDqcR5dTdxLNBFcR0y1CD6JcojnnNl8Jo4kFt4ZwJL00sOejVhCK'
    });
  }

  exports.getProducts=async(req,res)=>{

    console.log(typeof req.params.id);
    const keyword=req.params.id?{$or:[{name:{$regex:req.params.id,$options:"i"}},{brand:{$regex:req.params.id,$options:"i"}}]}:{};
    const shoes=await Shoe.find(keyword);

    res.status(200).json({
        status:'success',
        shoes
    })
  }