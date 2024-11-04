import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLFloat, GraphQLString } from 'graphql';

export const createUserInput = new GraphQLInputObjectType({
  name: 'createUserInput',

  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    balance: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
});
