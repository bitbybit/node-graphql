import { GraphQLList } from 'graphql';
import { memberTypeType } from '../types/memberTypeType.js';
import { PrismaClient } from '@prisma/client';

export const memberTypes = {
  memberTypes: {
    type: new GraphQLList(memberTypeType),

    async resolve(
      _source: string,
      _variables: Record<string, unknown>,
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.memberType.findMany();
    },
  },
};
