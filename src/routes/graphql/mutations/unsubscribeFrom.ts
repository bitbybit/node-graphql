import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../types/uuid.js';

export const unsubscribeFrom = {
  unsubscribeFrom: {
    type: new GraphQLNonNull(GraphQLString),

    args: {
      userId: {
        type: new GraphQLNonNull(UUIDType),
      },

      authorId: {
        type: new GraphQLNonNull(UUIDType),
      },
    },

    async resolve(
      _source: unknown,
      {
        userId,
        authorId,
      }: Record<string, unknown> & {
        userId: string;
        authorId: string;
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      await prisma.subscribersOnAuthors.delete({
        where: {
          subscriberId_authorId: {
            subscriberId: userId,
            authorId: authorId,
          },
        },
      });

      return authorId;
    },
  },
};
