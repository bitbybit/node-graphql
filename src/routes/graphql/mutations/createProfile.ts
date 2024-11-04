import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { profileType } from '../types/profileType.js';
import { createProfileInput } from '../inputs/createProfileInput.js';

export const createProfile = {
  createProfile: {
    type: new GraphQLNonNull(profileType),

    args: {
      dto: {
        type: new GraphQLNonNull(createProfileInput),
      },
    },

    async resolve(
      _source: string,
      {
        dto,
      }: Record<string, unknown> & {
        dto: {
          isMale: boolean;
          yearOfBirth: number;
          userId: string;
          memberTypeId: string;
        };
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.profile.create({
        data: dto,
      });
    },
  },
};
