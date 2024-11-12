import { PrismaClient } from '@prisma/client';
import { UUIDType } from '../types/uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { profileType } from '../types/profileType.js';
import { changeProfileInput } from '../inputs/changeProfileInput.js';

export const changeProfile = {
  changeProfile: {
    type: new GraphQLNonNull(profileType),

    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      dto: {
        type: new GraphQLNonNull(changeProfileInput),
      },
    },

    async resolve(
      _source: unknown,
      {
        id,
        dto,
      }: Record<string, unknown> & {
        id: string;
        dto: {
          isMale: boolean;
          yearOfBirth: number;
          memberTypeId: string;
        };
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.profile.update({
        where: { id },
        data: dto,
      });
    },
  },
};
