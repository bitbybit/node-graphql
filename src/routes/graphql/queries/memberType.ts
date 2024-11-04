import { memberTypeType } from '../types/memberTypeType.js';
import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { memberTypeId } from '../enums/memberTypeId.js';

export const memberType = {
  memberType: {
    type: memberTypeType,

    args: {
      id: {
        type: new GraphQLNonNull(memberTypeId),
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
      return prisma.memberType.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
