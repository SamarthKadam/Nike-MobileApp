const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;
const mutation=require('./mutations/mutation')

const RootQueryType = require('./queries/RootQuery');
module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation:mutation
});
