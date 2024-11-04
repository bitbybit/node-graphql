import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { UUIDType } from '../types/uuid.js';
import { postType } from '../types/postType.js';

export const post = {
  post: {
    type: postType,

    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
    },

    async resolve(
      _source: unknown,
      {
        id,
      }: Record<string, unknown> & {
        id: string;
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.post.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
