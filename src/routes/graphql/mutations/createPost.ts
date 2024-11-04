import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { postType } from '../types/postType.js';
import { createPostInput } from '../inputs/createPostInput.js';

export const createPost = {
  createPost: {
    type: new GraphQLNonNull(postType),

    args: {
      dto: {
        type: new GraphQLNonNull(createPostInput),
      },
    },

    async resolve(
      _source: unknown,
      {
        dto,
      }: Record<string, unknown> & {
        dto: {
          title: string;
          content: string;
          authorId: string;
        };
      },
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.post.create({
        data: dto,
      });
    },
  },
};
