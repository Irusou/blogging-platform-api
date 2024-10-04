import mongoose from 'mongoose'

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('connected')
  })
  .catch(() => {
    console.error('couldn`t connect to mongodb.')
  })
