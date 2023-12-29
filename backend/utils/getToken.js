const jwt=require('jsonwebtoken');
const dotenv=require('dotenv').config();

 exports.signToken=(id)=>{
    const token=jwt.sign({id},process.env.JWTSECRET,{expiresIn:process.env.JWTEXPIRES});
    return token;
}