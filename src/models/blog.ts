import mongoose, { Schema, type Document } from 'mongoose'

interface IBlogPost extends Document {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const blogPost: Schema = new Schema({
  id: Schema.ObjectId,
  title: String,
  content: String,
  category: String,
  tags: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const BlogPost = mongoose.model<IBlogPost>('BlogPost', blogPost)

export { BlogPost, type IBlogPost }
