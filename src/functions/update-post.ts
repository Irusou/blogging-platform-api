import { BlogPost } from '../models/blog'
import type { Post } from './create-post'
import { getPostById } from './get-post-by-id'

export async function updatePost(
  id: string,
  { title, content, category, tags }: Post
) {
  await BlogPost.updateOne(
    { _id: id },
    {
      title,
      content,
      category,
      tags,
      updatedAt: new Date(),
    }
  )
  const updatedPost = await getPostById(id)
  console.warn(updatedPost)

  return updatedPost
}
