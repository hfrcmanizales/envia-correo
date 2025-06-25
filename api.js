import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer"
import router from "./src/ruta.js"


dotenv.config()




const api = express();
api.use(express.json())

const allowedOrigins = ['http://localhost:5173/', 'https://tu-frontend.com'];

api.use(cors({
  origin: (origin, callback) => {
    // Si no hay origen (como en apps móviles o curl), se permite
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('No permitido por CORS'));
    }
  }
}));

api.use(router);


export default api;