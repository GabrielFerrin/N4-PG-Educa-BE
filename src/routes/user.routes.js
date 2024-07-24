import { Router } from 'express'
import { upload } from '../middleware/multer.js'
import userController from '../controllers/user.controller.js'

const router = Router()

router.post('/uploadvideo', upload.single('video'), userController.uploadVideo)

export default router
