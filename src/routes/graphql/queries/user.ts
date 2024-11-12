import { PrismaClient } from '@prisma/client';
import { GraphQLNonNull, type GraphQLResolveInfo } from 'graphql/type/index.js';
import {
  parseResolveInfo,
  type ResolveTree,
  simplifyParsedResolveInfoFragmentWithType,
} from 'graphql-parse-resolve-info';
import { userType } from '../types/userType.js';
import { UUIDType } from '../types/uuid.js';
import { GraphQLObjectType } from 'graphql/index.js';

export const user = {
  user: {
    type: userType as GraphQLObjectType,

    args: {
      id: {
        type: new GraphQLNonNull(UUIDType),
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
      resolveInfo: GraphQLResolveInfo,
    ) {
      const parsedResolveInfoFragment = parseResolveInfo(resolveInfo);

      const { fields } = simplifyParsedResolveInfoFragmentWithType(
        parsedResolveInfoFragment as ResolveTree,
        userType as GraphQLObjectType,
      );

      const hasPosts = fields['posts'] !== undefined;
      const hasProfile = fields['profile'] !== undefined;
      const hasSubscribedToUser = fields['subscribedToUser'] !== undefined;
      const hasUserSubscribedTo = fields['userSubscribedTo'] !== undefined;

      return prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          posts: hasPosts,
          profile: hasProfile,
          subscribedToUser: hasSubscribedToUser
            ? { select: { subscriber: true } }
            : false,
          userSubscribedTo: hasUserSubscribedTo ? { select: { author: true } } : false,
        },
      });
    },
  },
};
