import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

export const changePostInput = new GraphQLInputObjectType({
  name: 'changePostInput',

  fields: {
    title: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
  },
});
