import { GraphQLBoolean, GraphQLInt, GraphQLObjectType } from 'graphql';
import { UUIDType } from './uuid.js';
import { memberTypeType } from './memberTypeType.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const profileType = new GraphQLObjectType({
  name: 'Profile',

  fields() {
    return {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      isMale: {
        type: new GraphQLNonNull(GraphQLBoolean),
      },
      yearOfBirth: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      memberType: {
        type: new GraphQLNonNull(memberTypeType),
      },
    };
  },
});
