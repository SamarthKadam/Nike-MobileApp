const express=require('express');
const app=express();


app.get('/',(req,res,next)=>{
    res.status(200).json({
        status:'success'
    })
})
const port=8000;
app.listen(port,'192.168.1.10',()=>{
    console.log(`SERVER RUNNING IN PORTNO:${port}`);
})