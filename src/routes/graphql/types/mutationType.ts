import { GraphQLObjectType } from 'graphql';
import { createUser } from '../mutations/createUser.js';
import { deleteUser } from '../mutations/deleteUser.js';
import { changeUser } from '../mutations/changeUser.js';
import { createPost } from '../mutations/createPost.js';
import { changePost } from '../mutations/changePost.js';
import { deletePost } from '../mutations/deletePost.js';

export const mutationType = new GraphQLObjectType({
  name: 'Mutations',

  fields() {
    return {
      ...createUser,
      ...changeUser,
      ...deleteUser,

      ...createPost,
      ...changePost,
      ...deletePost,
    };
  },
});
