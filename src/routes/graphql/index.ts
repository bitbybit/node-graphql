import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import depthLimit from 'graphql-depth-limit';
import { createGqlResponseSchema, gqlResponseSchema } from './schemas.js';
import { graphql, GraphQLSchema, validate, parse } from 'graphql';
import { rootQueryType } from './types/rootQueryType.js';
import { mutationsType } from './types/mutationsType.js';
import { createLoaders } from './dataloaders.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma } = fastify;

  const schema = new GraphQLSchema({
    query: rootQueryType,
    mutation: mutationsType,
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
      const { query, variables } = req.body;
      const parsedQuery = parse(query);

      const maxDepth = 5;
      const validationRules = [depthLimit(maxDepth)];

      const errors = validate(schema, parsedQuery, validationRules);

      if (errors.length > 0) {
        return {
          errors: errors.map((error) => ({
            message: error.message,
          })),
        };
      }

      const loaders = createLoaders(prisma);

      return graphql({
        schema,
        source: query,
        variableValues: variables,
        contextValue: {
          prisma,
          loaders,
        },
      });
    },
  });
};

export default plugin;
