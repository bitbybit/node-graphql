import { GraphQLFloat, GraphQLInt, GraphQLObjectType } from 'graphql';
import { memberTypeId } from '../enums/memberTypeId.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const memberTypeType = new GraphQLObjectType({
  name: 'MemberType',

  fields() {
    return {
      id: {
        type: new GraphQLNonNull(memberTypeId),
      },
      discount: {
        type: new GraphQLNonNull(GraphQLFloat),
      },
      postsLimitPerMonth: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    };
  },
});
