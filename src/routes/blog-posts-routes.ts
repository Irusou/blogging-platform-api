import express, { type Request, type Response } from 'express'
import { createPost } from '../functions/create-post'
import { getPostById } from '../functions/get-post-by-id'
import { getPosts } from '../functions/get-posts'
import { updatePost } from '../functions/update-post'
import { validateBody } from '../middlewere/validate-body'
const router = express.Router()

router.get('/', async (_req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json({ posts })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const post = await getPostById(id)
    res.status(200).json({ post })
  } catch (error) {
    res.status(404).json({ message: 'Post not found.' })
  }
})

router.post('/', validateBody, async (req: Request, res: Response) => {
  try {
    const { title, content, category, tags } = req.body
    const newPost = await createPost({ title, content, category, tags })
    res.status(201).json({ newPost })
  } catch (error) {
    console.error(error)

    res.status(500).json({ message: 'Error creating post.', error })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const { title, content, category, tags } = req.body
    const updatedPost = await updatePost(id, { title, content, category, tags })
    if (!updatedPost) {
      throw Error('There is no post with the given id.')
    }
    res.status(200).json({ updatedPost })
  } catch (error) {
    console.error(error)

    res.status(404).json({ message: 'Post not found.' })
  }
})
router.delete('/')

export { router as blogPostRouter }
