import { GraphQLBoolean, GraphQLInt, GraphQLObjectType } from 'graphql';
import { UUIDType } from './uuid.js';
import { memberTypeType } from './memberTypeType.js';
import { GraphQLNonNull } from 'graphql/type/index.js';
import { PrismaClient, type Profile } from '@prisma/client';
import DataLoader from 'dataloader';

export const profileType = new GraphQLObjectType({
  name: 'Profile',

  fields() {
    return {
      id: {
        type: new GraphQLNonNull(UUIDType),
      },

      isMale: {
        type: new GraphQLNonNull(GraphQLBoolean),
      },

      yearOfBirth: {
        type: new GraphQLNonNull(GraphQLInt),
      },

      memberType: {
        type: new GraphQLNonNull(memberTypeType),

        async resolve(
          profile: Profile,
          _args: unknown,
          {
            loaders,
          }: {
            prisma: PrismaClient;
            loaders: Record<string, InstanceType<typeof DataLoader>>;
          },
        ) {
          return loaders.memberTypeLoader.load(profile.memberTypeId);
        },
      },
    };
  },
});
