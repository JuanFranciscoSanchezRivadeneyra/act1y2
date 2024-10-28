import Database from "better-sqlite3";
const db = new Database('app.db');

// Crear tabla de usuarios
const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name STRING NOT NULL,
        username STRING NOT NULL UNIQUE
    );
`;

// Crear tabla de departamentos
const createDepartmentsTable = `
    CREATE TABLE IF NOT EXISTS departamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre STRING NOT NULL
    );
`;

// Crear tabla de empleados
const createEmployeesTable = `
    CREATE TABLE IF NOT EXISTS empleados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre STRING NOT NULL,
        correo STRING NOT NULL,
        departamento INTEGER,
        FOREIGN KEY(departamento) REFERENCES departamentos(id)
    );
`;

// Ejecutar las consultas para crear las tablas
db.exec(createUsersTable);
db.exec(createDepartmentsTable);
db.exec(createEmployeesTable);

db.close();
