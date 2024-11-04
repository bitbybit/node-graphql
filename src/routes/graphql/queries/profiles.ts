import { GraphQLList } from 'graphql';
import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { profileType } from '../types/profileType.js';

export const profiles = {
  profiles: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(profileType))),

    async resolve(
      _source: string,
      _variables: Record<string, unknown>,
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.profile.findMany();
    },
  },
};
