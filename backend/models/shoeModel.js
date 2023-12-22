const mongoose=require('mongoose');
const shoeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    gallery:{
        type:[String],
        required:true
    },
    price:{
        type:String,
        required:true
    },
    sizes:{
        type:[Number],
        required:true
    }
})
const Shoe=mongoose.model('Shoe',shoeSchema);
module.exports=Shoe;