import bcrypt from "bcrypt";
import { pool } from "../db/db.js";

export const vistaHome = (req, res) => {
    res.render("index")
};

export const vistaLogin = (req, res) => {
    res.render("login")
};

export const vistaRegistro = (req, res) => {
    res.render("registro")
};
export const postRegistro = async (req, res) => {
    //Lo pedido en el registro
    const user = req.body.user;
    const name = req.body.name;
    const rol = req.body.rol;
    const pass = req.body.pass;

    try {
        const passwordHash = await bcrypt.hash(pass, 8);
        await pool.query('INSERT INTO usuarios SET?', { user: user, name: name, rol: rol, pass: passwordHash });
        res.send("Usuario creado correctamente");
    } catch (error) {
        res.send("No se ha podido crear el usuario");
        console.log(error);
    }
};
export const postLogin = (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    if (user, pass) {
        const [results] = await pool.query('SELECT * FROM usuarios WHERE user= ?'. [user]);
        if (results.length == 0 || !(await bcrypt.compare(pass, results[0].pass))) {
            res.send("Login correcto");
        }else {
           res.send("Login incorrecto"); 
        }
    }
};
