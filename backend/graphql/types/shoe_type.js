const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} = graphql;
const Shoe=require('../../models/shoeModel');

const ShoeType=new GraphQLObjectType({
    name:'ShoeType',
    fields:()=>({
        id: { type: graphql.GraphQLID },
        name:{type:GraphQLString},
        brand:{type:GraphQLString},
        description:{type:GraphQLString},
        gallery:{
            type:new GraphQLList(GraphQLString)
        },
        price:{type:GraphQLString},
        sizes:{type:new GraphQLList(graphql.GraphQLInt)}
    })
})

module.exports=ShoeType;