import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { UUIDType } from '../types/uuid.js';
import { profileType } from '../types/profileType.js';

export const profile = {
  profile: {
    type: profileType,

    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
    },

    async resolve(
      _source: string,
      {
        id,
      }: Record<string, unknown> & {
        id: string;
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.profile.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
