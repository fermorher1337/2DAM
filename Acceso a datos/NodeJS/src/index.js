import express from "express";
import ejs from "ejs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
dirname(fileURLToPath(import.meta.url))
const __dirname = dirname(fileURLToPath(import.meta.url))
//Modulos requeridos

console.log("Hola cabesa");

//Inicializacion
const app = express();

//Configuracion
app.listen("4000");
console.log("Funsiona")
//Motor de la plantilla JS
app.set("views", join(__dirname, "views"))
app.set("view engine","ejs");

//Rutas de las paginas
app.get("/",(req,res)=>{
    res.send("Este es el inicio")
})

app.get("/index",(req,res)=>{
    res.send("Este es el indice")
})


app.get("/registro",(req,res)=>{
    res.send("Este es el registro de usuarios")
})

app.get("/crud",(req,res)=>{
    res.send("Este es el CRUD")
})

app.get("/login",(req,res)=>{
    res.send("Este es el login")
})
