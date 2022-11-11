export interface Post {
  id: string;
  name: string;
  data: { title: string; date: Date; draft?: boolean };
  content: string;
}

// 📢 Shout out Nate Moore for guidance on this. 
// Based on the code below.
// https://github.com/natemoo-re/feed/blob/main/www/src/utils/data.ts#L15

const readAllFiles = (dir: string) => {};

export const getAllPosts = async () => {};

export const getPost = async (id: string) => {};
