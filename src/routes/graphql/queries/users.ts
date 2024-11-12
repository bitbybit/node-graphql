import { GraphQLList } from 'graphql';
import { PrismaClient } from '@prisma/client';
import { userType } from '../types/userType.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const users = {
  users: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),

    async resolve(
      _source: unknown,
      _variables: Record<string, unknown>,
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.user.findMany();
    },
  },
};
