import { GraphQLEnumType } from 'graphql/type/index.js';

export const memberTypeId = new GraphQLEnumType({
  name: 'MemberTypeId',

  values: {
    BASIC: {
      value: 'BASIC',
    },
    BUSINESS: {
      value: 'BUSINESS',
    },
  },
});
