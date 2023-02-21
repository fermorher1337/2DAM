//modulos necesarios
import express from "express";
import dotenv from "dotenv";
import {dirname,join} from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/router.js";
import {pool} from "./db/db.js";

const __dirname=dirname(fileURLToPath(import.meta.url)); //Ruta absoluta
dotenv.config();

const app= express();
//Recibir datos del formulario
app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");
app.set("views",join(__dirname,"views"));
app.use(indexRoutes);

app.use(express.static(join(__dirname,"public")));

const port= process.env.port || 3000; 
app.listen(port);
console.log("El servidor esta esperando en el puerto ",port);

