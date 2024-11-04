import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { profileType } from './profileType.js';
import { postType } from './postType.js';
import { UUIDType } from './uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const userType = new GraphQLObjectType({
  name: 'User',

  fields() {
    return {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      balance: {
        type: new GraphQLNonNull(GraphQLFloat),
      },
      profile: {
        type: profileType,
      },
      posts: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(postType))),
      },
      userSubscribedTo: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),
      },
      subscribedToUser: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),
      },
    };
  },
});
