const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} = graphql;
const User=require('../../models/userModel');
const ShoeType=require('../types/shoe_type');
const CartType=require('../types/cart_type');

const UserType=new GraphQLObjectType({
    name:'UserType',
    fields:()=>({
        id: { type: graphql.GraphQLID },
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        password:{type:GraphQLString},
        token:{type:GraphQLString},
        shippingAddress:{
            type:GraphQLString
        },
        favourites:{
            type:new GraphQLList(ShoeType)
        },
        cartItems:{
            type:new GraphQLList(CartType)
        }
    })
})

module.exports=UserType;