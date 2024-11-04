import { GraphQLObjectType, GraphQLString } from 'graphql';
import { UUIDType } from './uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const postType = new GraphQLObjectType({
  name: 'Post',

  fields() {
    return {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
