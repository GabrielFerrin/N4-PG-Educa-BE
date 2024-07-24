import express from 'express';
import { uploadVideo } from './controllers/video.controller.js';
import { upload } from './configs/multer.js';
import {PORT} from './configs/config.js'

const app = express()

app.post('/uploadvideo', upload.single('video'), uploadVideo)

app.listen(PORT, () => console.log('Server ON!'))