import app from './app.js'
import { PORT } from './configs/config.js'

app.listen(PORT, () => console.log('Server ON!'))
