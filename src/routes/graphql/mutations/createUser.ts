import { PrismaClient } from '@prisma/client';
import { userType } from '../types/userType.js';
import { createUserInput } from '../inputs/createUserInput.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const createUser = {
  createUser: {
    type: new GraphQLNonNull(userType),

    args: {
      dto: {
        type: new GraphQLNonNull(createUserInput),
      },
    },

    async resolve(
      _source: unknown,
      {
        dto,
      }: Record<string, unknown> & {
        dto: {
          name: string;
          balance: number;
        };
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.user.create({
        data: dto,
      });
    },
  },
};
