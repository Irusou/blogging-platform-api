import express, { type Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import { blogPostRouter } from '../routes/blog-posts-routes'
import { port, uri } from './../env'

async function main() {
  try {
    if (!uri) throw new Error('Invalid or empty connection string.')

    await mongoose.connect(uri, { dbName: 'blogs' })

    const app: Express = express()
    app.use(express.json())
    app.get('/', (_req: Request, res: Response) => {
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
