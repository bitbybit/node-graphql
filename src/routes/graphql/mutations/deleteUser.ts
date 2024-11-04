import { PrismaClient } from '@prisma/client';
import { GraphQLString } from 'graphql';
import { UUIDType } from '../types/uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const deleteUser = {
  deleteUser: {
    type: new GraphQLNonNull(GraphQLString),

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
      await prisma.user.delete({
        where: {
          id,
        },
      });

      return id;
    },
  },
};
