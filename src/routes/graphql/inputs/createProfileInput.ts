import { GraphQLInputObjectType, GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLBoolean, GraphQLInt } from 'graphql';
import { UUIDType } from '../types/uuid.js';
import { memberTypeId } from '../enums/memberTypeId.js';

export const createProfileInput = new GraphQLInputObjectType({
  name: 'CreateProfileInput',

  fields: {
    isMale: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    yearOfBirth: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    userId: {
      type: new GraphQLNonNull(UUIDType),
    },
    memberTypeId: {
      type: new GraphQLNonNull(memberTypeId),
    },
  },
});
