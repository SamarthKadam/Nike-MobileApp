const mongoose=require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ShoeType=require('../types/shoe_type');
const Shoe=require('../../models/shoeModel');
const UserType = require('../types/user_type');
const User = require('../../models/userModel');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    shoe:{
        type: ShoeType,
        args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        resolve(parentValue, { id }) {
        return Shoe.findById(id);
        }
    },
    shoeCategory:{
      type:new GraphQLList(ShoeType),
      args:{brand:{type:new GraphQLNonNull(graphql.GraphQLString)}},
      resolve(parentValue,{brand})
      {
        return Shoe.find({brand});
      }
    },
     getfavourites:{
      type:UserType,
      args:{id:{type:new GraphQLNonNull(GraphQLID)}},
      async resolve(parentValue,{id})
      {
        return User.findById(id).populate('favourites');
      }
    },
    userInfo:{
      type:UserType,
      args:{id:{type:new GraphQLNonNull(GraphQLID)}},
      async resolve(parentValue,{id})
      {
        return User.findById(id).populate('favourites').populate('cartItems.shoe');
      }
    }
  })
});

module.exports = RootQuery;
