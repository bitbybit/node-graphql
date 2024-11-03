import { memberTypeType } from '../types/memberTypeType.js';
import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { memberTypeId } from '../enums/memberTypeId.js';

export const memberType = {
  memberType: {
    type: memberTypeType,

    args: {
      id: {
        description: 'id of the droid',
        type: new GraphQLNonNull(memberTypeId),
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
      return prisma.memberType.findUnique({
        where: {
          id,
        },
      });
    },
  },
};
