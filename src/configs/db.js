import mongoose from "mongoose";
import { DB_HOST } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_HOST);
        console.log('Conectado a la base de datos!')
    } catch (error) {
        console.log('Error en la conexion', error);
    }
}