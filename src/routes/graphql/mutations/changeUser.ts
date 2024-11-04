import { PrismaClient } from '@prisma/client';
import { userType } from '../types/userType.js';
import { UUIDType } from '../types/uuid.js';
import { changeUserInput } from '../inputs/changeUserInput.js';
import { GraphQLNonNull } from 'graphql/type/index.js';

export const changeUser = {
  changeUser: {
    type: new GraphQLNonNull(userType),

    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      dto: {
        type: new GraphQLNonNull(changeUserInput),
      },
    },

    async resolve(
      _source: string,
      {
        id,
        dto,
      }: Record<string, unknown> & {
        id: string;
        dto: {
          name: string;
          balance: number;
        };
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.user.update({
        where: { id },
        data: dto,
      });
    },
  },
};
