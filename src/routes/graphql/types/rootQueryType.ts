import { GraphQLObjectType } from 'graphql';
import { memberTypes } from '../queries/memberTypes.js';
import { memberType } from '../queries/memberType.js';
import { users } from '../queries/users.js';
import { user } from '../queries/user.js';

export const rootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields() {
    return {
      ...memberTypes,
      ...memberType,
      ...users,
      ...user,
    };
  },
});
