import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer"
import router from "./src/ruta.js"


dotenv.config()




const api = express();

const allowedOrigins = ['http://localhost:5173','https://tatu-blme.onrender.com/contact'];


api.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

api.use(express.json())

api.use("/",router);


export default api;