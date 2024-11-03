import { GraphQLFloat, GraphQLInt, GraphQLObjectType } from 'graphql';
import { memberTypeId } from '../enums/memberTypeId.js';

export const memberTypeType = new GraphQLObjectType({
  name: 'MemberType',

  fields() {
    return {
      id: {
        type: memberTypeId,
      },
      discount: {
        type: GraphQLFloat,
      },
      postsLimitPerMonth: {
        type: GraphQLInt,
      },
    };
  },
});
