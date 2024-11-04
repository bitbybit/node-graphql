import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';

export const changePostInput = new GraphQLInputObjectType({
  name: 'changePostInput',

  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});
