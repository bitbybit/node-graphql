import { GraphQLObjectType } from 'graphql';
import { memberTypes } from '../queries/memberTypes.js';
import { memberType } from '../queries/memberType.js';
import { users } from '../queries/users.js';
import { user } from '../queries/user.js';
import { posts } from '../queries/posts.js';
import { post } from '../queries/post.js';

export const rootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields() {
    return {
      ...memberTypes,
      ...memberType,

      ...users,
      ...user,

      ...posts,
      ...post,
    };
  },
});
