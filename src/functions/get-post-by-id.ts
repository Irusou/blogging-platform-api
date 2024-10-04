import { BlogPost } from '../models/blog'

export async function getPostById(id: string) {
  const post = await BlogPost.find({ id })
  console.warn(post)
  return post
}
