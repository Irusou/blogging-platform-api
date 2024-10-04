import express from 'express'
import mongoose from 'mongoose'
import { blogPostRouter } from '../routes/blog-posts-routes'
import { port, uri } from './../env'

async function main() {
  try {
    if (!uri) throw new Error('Invalid or empty connection string.')

    await mongoose.connect(uri, { dbName: 'blogs' })

    const app = express()

    app.get('/', (_req, res) => {
      res.send('Blog Platform API')
    })

    app.use('/posts', blogPostRouter)

    app.listen(port, () => {
      console.log(`http://localhost:${port}`)
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error?.message)
    }
  }
}

main()
