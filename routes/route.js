//importar router y pool para la base de datos
import { Router } from "express"; 
import { pool } from "../app.js";

//Inicializo router 
const router = Router();

//Creo las consultas 

router.get("/animales", async (req, res) => {
    const result = await pool.query("SELECT * FROM animales")
    res.json(result[0]);
});

//Para buscar por id
router.get("/animales/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM animales WHERE id = ?", [id]);
    res.json(result[0]);
});

//Para agregar
router.post("/animales", async (req, res) => {
    const { nombre, tipo, edad } = req.body;
    const result = await pool.query("INSERT INTO animales (nombre, tipo, edad) VALUES (?,?,?)", [nombre, tipo, edad]);
    res.json({ message: "Animal agregado exitosamente" });
});

//Para editar
router.put("/animales/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, edad } = req.body;
    const result = await pool.query("UPDATE animales SET nombre =?, tipo =?, edad =? WHERE id =?", [nombre, tipo, edad, id]);
    res.json({ message: "Animal actualizado exitosamente" });
});

//Para eliminar
router.delete("/animales/:id", async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM animales WHERE id =?", [id]);
    res.json({ message: "Animal eliminado exitosamente" });
});

//exportar router
export default router;