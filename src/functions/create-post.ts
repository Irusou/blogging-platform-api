import { BlogPost } from '../models/blog'

export type Post = {
  title: string
  content: string
  category: string
  tags: string[]
}

export async function createPost({ title, content, category, tags }: Post) {
  const newPost = new BlogPost({
    title,
    content,
    category,
    tags,
    createdAT: new Date(),
    updatedAt: new Date(),
  })
  await newPost.save()
  return newPost
}
