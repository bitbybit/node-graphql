import { PrismaClient } from '@prisma/client';
import { UUIDType } from '../types/uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { postType } from '../types/postType.js';
import { changePostInput } from '../inputs/changePostInput.js';

export const changePost = {
  changePost: {
    type: new GraphQLNonNull(postType),

    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      dto: {
        type: new GraphQLNonNull(changePostInput),
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
          title: string;
          content: string;
        };
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.post.update({
        where: { id },
        data: dto,
      });
    },
  },
};
