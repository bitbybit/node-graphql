import { GraphQLList } from 'graphql';
import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { postType } from '../types/postType.js';

export const posts = {
  posts: {
    type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(postType))),

    async resolve(
      _source: string,
      _variables: Record<string, unknown>,
      { prisma }: { prisma: PrismaClient },
    ) {
      return prisma.post.findMany();
    },
  },
};
