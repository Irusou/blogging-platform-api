import { BlogPost } from '../models/blog'

export async function getPostById(id: string) {
  console.log(id)

  const post = await BlogPost.findById({ _id: id })
  console.warn(post)
  return post
}
