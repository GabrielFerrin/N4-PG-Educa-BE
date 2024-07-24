import express from 'express'
import userRoutes from './routes/user.routes.js'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/users', userRoutes)

export default app
