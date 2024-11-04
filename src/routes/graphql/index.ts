import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql, GraphQLSchema } from 'graphql';
import { rootQueryType } from './types/rootQueryType.js';
import { mutationType } from './types/mutationType.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;

  const schema = new GraphQLSchema({
    query: rootQueryType,
    mutation: mutationType,
  });

  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      return graphql({
        schema,
        source: req.body.query,
        variableValues: req.body.variables,
        contextValue: {
          prisma,
        },
      });
    },
  });
};

export default plugin;
