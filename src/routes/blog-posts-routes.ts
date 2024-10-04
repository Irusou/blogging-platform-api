import express from 'express'
import { getPosts } from '../functions/get-posts'
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
    const posts = await getPosts()
    res.status(200).json({ posts })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' })
  }
})

router.post('/')
router.put('/')
router.delete('/')

export { router as blogPostRouter }
