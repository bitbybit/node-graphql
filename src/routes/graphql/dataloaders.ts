import DataLoader from 'dataloader';
import { type Post, PrismaClient, type Profile, type User } from '@prisma/client';

export function createLoaders(prisma: PrismaClient) {
  return {
    userSubscribedToLoader: new DataLoader(async (userIds: readonly string[]) => {
      const users = await prisma.user.findMany({
        where: { id: { in: userIds as string[] } },
        include: { userSubscribedTo: { select: { author: true } } },
      });

      const userMap = new Map<string, User[]>();

      users.forEach((user) => {
        userMap.set(
          user.id,
          user.userSubscribedTo.map(({ author }) => author),
        );
      });

      return userIds.map((id) => userMap.get(id) || []);
    }),

    subscribedToUserLoader: new DataLoader(async (userIds: readonly string[]) => {
      const users = await prisma.user.findMany({
        where: { id: { in: userIds as string[] } },
        include: { subscribedToUser: { select: { subscriber: true } } },
      });

      const userMap = new Map<string, User[]>();

      users.forEach((user) => {
        userMap.set(
          user.id,
          user.subscribedToUser.map(({ subscriber }) => subscriber),
        );
      });

      return userIds.map((id) => userMap.get(id) || []);
    }),

    postsLoader: new DataLoader(async (userIds: readonly string[]) => {
      const posts = await prisma.post.findMany({
        where: { authorId: { in: userIds as string[] } },
      });

      const postMap = new Map<string, Post[]>();

      posts.forEach((post) => {
        if (!postMap.has(post.authorId)) {
          postMap.set(post.authorId, []);
        }

        postMap.get(post.authorId)?.push(post);
      });

      return userIds.map((id) => postMap.get(id) || []);
    }),

    profileLoader: new DataLoader(async (userIds: readonly string[]) => {
      const profiles = await prisma.profile.findMany({
        where: { userId: { in: userIds as string[] } },
      });

      const profileMap = new Map<string, Profile | null>();

      profiles.forEach((profile) => {
        profileMap.set(profile.userId, profile);
      });

      return userIds.map((id) => profileMap.get(id) || null);
    }),
  };
}
