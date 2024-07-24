import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/')
  },
  filename: function (req, file, cb) {
    const datename = Date.now()
    cb(null, `${datename}-${file.originalname}`)
  }
})

const fileFilter = (req, file, cb) => {
  const alloweds = [
    'video/mp4'
  ]
  if (alloweds.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Solo se permiten videos en formato mp4'), false)
  }
}

export const upload = multer({ storage, fileFilter })
