import { GraphQLObjectType } from 'graphql';
import { createUser } from '../mutations/createUser.js';
import { deleteUser } from '../mutations/deleteUser.js';
import { changeUser } from '../mutations/changeUser.js';
import { createPost } from '../mutations/createPost.js';
import { changePost } from '../mutations/changePost.js';
import { deletePost } from '../mutations/deletePost.js';
import { createProfile } from '../mutations/createProfile.js';
import { changeProfile } from '../mutations/changeProfile.js';
import { deleteProfile } from '../mutations/deleteProfile.js';
import { subscribeTo } from '../mutations/subscribeTo.js';
import { unsubscribeFrom } from '../mutations/unsubscribeFrom.js';

export const mutationsType = new GraphQLObjectType({
  name: 'Mutations',

  fields() {
    return {
      ...createUser,
      ...changeUser,
      ...deleteUser,

      ...createPost,
      ...changePost,
      ...deletePost,

      ...createProfile,
      ...changeProfile,
      ...deleteProfile,

      ...subscribeTo,
      ...unsubscribeFrom,
    };
  },
});
