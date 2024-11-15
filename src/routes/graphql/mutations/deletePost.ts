import { PrismaClient } from '@prisma/client';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../types/uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const deletePost = {
  deletePost: {
    type: new GraphQLNonNull(GraphQLString),

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
      await prisma.post.delete({
        where: {
          id,
        },
      });

      return id;
    },
  },
};
