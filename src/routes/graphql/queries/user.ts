import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { userType } from '../types/userType.js';
import { UUIDType } from '../types/uuid.js';

export const user = {
  user: {
    type: userType,

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
      return prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          posts: true,
          profile: true,
          subscribedToUser: {
            select: {
              subscriber: true,
            },
          },
          userSubscribedTo: {
            select: {
              author: true,
            },
          },
        },
      });
    },
  },
};
