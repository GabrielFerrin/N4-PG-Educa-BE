import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 5000
export const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/educa'
export const JWT_SECRET= process.env.JWT_SECRET || "mysecretkey"