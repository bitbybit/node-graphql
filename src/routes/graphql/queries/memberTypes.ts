import { GraphQLList } from 'graphql';
import { memberTypeType } from '../types/memberTypeType.js';
import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const memberTypes = {
  memberTypes: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(memberTypeType))),

    async resolve(
      _source: unknown,
      _variables: Record<string, unknown>,
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.memberType.findMany();
    },
  },
};
