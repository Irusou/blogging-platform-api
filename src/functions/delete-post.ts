import { BlogPost } from '../models/blog'

export async function deletePost(id: string) {
  console.log(id)
  const post = await BlogPost.findById({ _id: id })
  await BlogPost.deleteOne({ _id: id })
  console.warn('removed', post)
  return post
}
