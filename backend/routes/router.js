const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');

router.get('/samarth',(req,res)=>{
    res.json({
        status:'success',
        message:"Everything works fine"
    })
})
router.post('/payment-sheet',controller.makepayments)
router.get('/search/:id',controller.getProducts)

module.exports=router;