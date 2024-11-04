import { GraphQLObjectType } from 'graphql';
import { createUser } from '../mutations/createUser.js';
import { deleteUser } from '../mutations/deleteUser.js';
import { changeUser } from '../mutations/changeUser.js';

export const mutationType = new GraphQLObjectType({
  name: 'Mutations',

  fields() {
    return {
      ...createUser,
      ...deleteUser,
      ...changeUser,
    };
  },
});
