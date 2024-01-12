const express=require('express');
const router=express.Router();
const controller=require('../controller/controller');

router.post('/payment-sheet',controller.makepayments)
router.get('/search/:id',controller.getProducts)

module.exports=router;