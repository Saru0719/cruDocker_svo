/*Creación de la base de datos mediante docker */

CREATE DATABASE IF NOT EXISTS veterinaria_SYM; 
USE veterinaria_SYM;

CREATE TABLE IF NOT EXISTS animales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    tipo VARCHAR(200) NOT NULL,
    edad INT NOT NULL
);

