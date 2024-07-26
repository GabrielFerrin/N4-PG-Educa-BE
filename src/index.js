import express from 'express'
import userRoutes from './routes/user.routes.js'
import morgan from 'morgan'
import { validaCORS } from './middleware/middleware.js'
import { connectDB } from './configs/db.js'
import { PORT } from './configs/config.js'

const app = express() //crear una instancia de express
app.use(validaCORS)     // Middleware para validar CORS
app.use(express.json()) // para que pueda recibir datos en formato json
app.use(morgan('dev')) 

connectDB() // conectar a la base de datos


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))
