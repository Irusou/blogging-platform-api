import type { NextFunction, Request, Response } from 'express'

function validateBody(req: Request, res: Response, next: NextFunction) {
  const { title, content, category, tags } = req.body

  if (!title || !content || !category || !Array.isArray(tags)) {
    return res.status(400).json({ message: 'Wrong format in body.' })
  }

  next()
}

function validateParams(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id
  if (!id || id.length < 1) {
    return res.status(400).json({ message: 'Wrong format in body.' })
  }

  next()
}

export { validateBody, validateParams }
