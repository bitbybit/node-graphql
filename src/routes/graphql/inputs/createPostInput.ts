import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../types/uuid.js';

export const createPostInput = new GraphQLInputObjectType({
  name: 'createPostInput',

  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
    authorId: {
      type: new GraphQLNonNull(UUIDType),
    },
  },
});
