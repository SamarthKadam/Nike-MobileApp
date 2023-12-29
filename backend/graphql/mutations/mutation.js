const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const { signToken } = require("../../utils/getToken");
const User = require("../../models/userModel");
const Shoe = require("../../models/shoeModel");
const UserType = require("../types/user_type");
const ShoeType = require("../types/shoe_type");
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parentValue, { name, email, password }) {
        const user = await User.create({
          name: name,
          email: email,
          password: password,
        });
        const token = signToken(user._id);
        return {
          id: user._id,
          token: token,
          name:user.name
        };
      },
    },
    loginUser: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      async resolve(parentValue, { email, password }) {

        const user=await User.findOne({email}).select('+password');
        if(!user || !(await user.correctPassword(user.password,password)))
        {
            return next( new AppError('Incorrect email or password',400))
        }
        const token=signToken(user._id);
        return {id:user._id,token,name:user.name}
      },
    },
    addToFavourites: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        shoeId: { type: GraphQLID },
      },
      async resolve(parentValue, { id, shoeId }) {
        try {
          const user = await User.findById(id);
          if (!user) {
            throw new Error("User not found");
          }

          user.favourites.push(shoeId);
          await user.save();

          return user.populate("favourites");
        } catch (err) {
          throw new Error(err);
        }
      },
    },
  },
});

module.exports = mutation;
