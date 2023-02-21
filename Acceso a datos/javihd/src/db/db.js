import {createPool} from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const pool= createPool({
    host: process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    port:process.env.db_port, 
    database:process.env.db_database
})

async function connectToDb() {
    try{
        const connection = await pool.getConnection();
        console.log("Conectado bien");
    }catch (error) {
        console.log("Ha petado",error);
    }
}

connectToDb();