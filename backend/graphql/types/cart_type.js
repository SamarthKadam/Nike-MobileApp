const User = require("../../models/userModel");
const ShoeType = require("../types/shoe_type");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt } = graphql;

const CartItemType = new GraphQLObjectType({
  name: "CartItemType",
  fields: () => ({
    shoe: { type: ShoeType },
    count: { type: GraphQLInt },
    size:{type:GraphQLInt}
  }),
});

module.exports = CartItemType;
