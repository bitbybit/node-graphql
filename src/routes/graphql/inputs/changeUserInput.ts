import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLFloat, GraphQLString } from 'graphql';

export const changeUserInput = new GraphQLInputObjectType({
  name: 'changeUserInput',

  fields: {
    name: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLFloat,
    },
  },
});
