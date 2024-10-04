import mongoose, { Schema, type Document } from 'mongoose'

interface ITag extends Document {
  tag: string
}

interface IBlogPost extends Document {
  id: string
  title: string
  content: string
  category: string
  tags: ITag[]
  createdAt: Date
  updatedAt: Date
}

const tagSchema: Schema = new Schema({
  tag: String,
})

const blogPost: Schema = new Schema({
  id: Schema.ObjectId,
  title: String,
  content: String,
  category: String,
  tags: [tagSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

const BlogPost = mongoose.model<IBlogPost>('BlogPost', blogPost)

export { BlogPost, type IBlogPost, type ITag }
