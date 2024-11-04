import { GraphQLFloat, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { profileType } from './profileType.js';
import { postType } from './postType.js';
import { UUIDType } from './uuid.js';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { PrismaClient, type User } from '@prisma/client';
import DataLoader from 'dataloader';

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

        async resolve(
          user: User,
          _args: unknown,
          {
            loaders,
          }: {
            prisma: PrismaClient;
            loaders: Record<string, InstanceType<typeof DataLoader>>;
          },
        ) {
          return loaders.profileLoader.load(user.id);
        },
      },

      posts: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(postType))),

        async resolve(
          user: User,
          _args: unknown,
          {
            loaders,
          }: {
            prisma: PrismaClient;
            loaders: Record<string, InstanceType<typeof DataLoader>>;
          },
        ) {
          return loaders.postsLoader.load(user.id);
        },
      },

      userSubscribedTo: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),

        async resolve(
          user: User,
          _args: unknown,
          {
            loaders,
          }: {
            prisma: PrismaClient;
            loaders: Record<string, InstanceType<typeof DataLoader>>;
          },
        ) {
          return loaders.userSubscribedToLoader.load(user.id);
        },
      },

      subscribedToUser: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),

        async resolve(
          user: User,
          _args: unknown,
          {
            loaders,
          }: {
            prisma: PrismaClient;
            loaders: Record<string, InstanceType<typeof DataLoader>>;
          },
        ) {
          return loaders.subscribedToUserLoader.load(user.id);
        },
      },
    };
  },
});
