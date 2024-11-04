import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLFloat, GraphQLString } from 'graphql';

export const changeUserInput = new GraphQLInputObjectType({
  name: 'ChangeUserInput',

  fields: {
    name: {
      type: GraphQLString,
    },
    balance: {
      type: GraphQLFloat,
    },
  },
});
