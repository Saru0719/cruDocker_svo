//Importar librerias
import express from "express";
import { createPool } from "mysql2/promise";
import route from "./routes/route.js"

//Inicializo express
const app = express();

// Conectar a la base de datos

export const pool = createPool({
  host: "mysqldb",
  user: "root",
  password: "12345",
  database: "veterinaria_SYM",
  port: 3306
});

app.use(express.json());  //para leer formatos tipos json
app.use(route)  //para utilizar las routes

// Puerto de la app

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));