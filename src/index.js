import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';

import { connectDB } from './config/db.js';

import { PORT } from './config/config.js';

const app = express();

app.use(express.json());

app.use('/api', authRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});