import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer"
import router from "./src/ruta.js"


dotenv.config()


const api = express();
api.use(express.json())

api.use(cors({
  origin: 'http://localhost:5173', // Cambia si tu frontend está en otro dominio o puerto
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
api.use(router)



export default api;