import { GraphQLObjectType } from 'graphql';
import { memberTypes } from '../queries/memberTypes.js';
import { memberType } from '../queries/memberType.js';

export const rootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields() {
    return {
      ...memberTypes,
      ...memberType,
    };
  },
});
