import { GraphQLInputObjectType } from 'graphql/type/index.js';
import { GraphQLBoolean, GraphQLInt } from 'graphql';
import { memberTypeId } from '../enums/memberTypeId.js';

export const changeProfileInput = new GraphQLInputObjectType({
  name: 'changeProfileInput',

  fields: {
    isMale: {
      type: GraphQLBoolean,
    },
    yearOfBirth: {
      type: GraphQLInt,
    },
    memberTypeId: {
      type: memberTypeId,
    },
  },
});
