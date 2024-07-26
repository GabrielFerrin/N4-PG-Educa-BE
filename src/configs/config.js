import { config } from 'dotenv';

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.PORT 
export const allowedOrigins = ['http://localhost:5173']