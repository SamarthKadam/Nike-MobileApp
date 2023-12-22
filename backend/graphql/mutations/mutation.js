const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const User=require('../../models/userModel');
const Shoe=require('../../models/shoeModel');
const UserType=require('../types/user_type');
const ShoeType = require('../types/shoe_type');
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
        type: UserType,
        args: {
          name: { type: GraphQLString },
          email:{type:GraphQLString},
          password:{type:GraphQLString},
        },
        resolve(parentValue, { name,email,password }) {
          return new User({name,email,password}).save();
        }
      },
    addToFavourites:{
        type:UserType,
        args:{
            id:{type:GraphQLID},
            shoeId:{type:GraphQLID}
        },
        async resolve(parentValue,{id,shoeId})
        {
            try {
                const user = await User.findById(id);
                if (!user) {
                  throw new Error('User not found');
                }
            
                user.favourites.push(shoeId);
                await user.save();
            
                return user.populate('favourites');
              } catch (err) {
                throw new Error(err);
              }
        }
    }
  }
});

module.exports = mutation;
