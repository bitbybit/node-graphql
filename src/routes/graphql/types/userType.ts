import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { profileType } from './profileType.js';
import { postType } from './postType.js';
import { UUIDType } from './uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { PrismaClient, type User } from '@prisma/client';

export const userType = new GraphQLObjectType({
  name: 'User',

  fields() {
    return {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },

      name: {
        type: new GraphQLNonNull(GraphQLString),
      },

      balance: {
        type: new GraphQLNonNull(GraphQLFloat),
      },

      profile: {
        type: profileType,

        async resolve(user: User, _args: unknown, { prisma }: { prisma: PrismaClient }) {
          return prisma.user.findUnique({ where: { id: user.id } }).profile();
        },
      },

      posts: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(postType))),

        async resolve(user: User, _args: unknown, { prisma }: { prisma: PrismaClient }) {
          return prisma.user.findUnique({ where: { id: user.id } }).posts();
        },
      },

      userSubscribedTo: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),

        async resolve(user: User, _args: unknown, { prisma }: { prisma: PrismaClient }) {
          const result = await prisma.user
            .findUnique({ where: { id: user.id } })
            .userSubscribedTo({ select: { author: true } });

          return result?.map(({ author }) => author) ?? [];
        },
      },

      subscribedToUser: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),

        async resolve(user: User, _args: unknown, { prisma }: { prisma: PrismaClient }) {
          const result = await prisma.user
            .findUnique({ where: { id: user.id } })
            .subscribedToUser({ select: { subscriber: true } });

          return result?.map(({ subscriber }) => subscriber) ?? [];
        },
      },
    };
  },
});
