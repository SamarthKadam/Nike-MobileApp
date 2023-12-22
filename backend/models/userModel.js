const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    shippingAddress:{
        type:String,
    },
    favourites:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'Shoe'}]
    },
    cartItems:{
        type:[{type:mongoose.Schema.Types.ObjectId,ref:'Shoe'}]
    }
})

const User=mongoose.model('User',userSchema);
module.exports=User;