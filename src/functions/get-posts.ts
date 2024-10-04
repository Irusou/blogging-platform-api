import { BlogPost } from '../models/blog'

export async function getPosts() {
  const posts = await BlogPost.find()
  console.warn(posts)
  return posts
}
