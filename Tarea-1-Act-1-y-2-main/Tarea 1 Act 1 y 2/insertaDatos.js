import Database from "better-sqlite3";
const db = new Database('app.db');

// Datos para insertar en la tabla users
const usersData = [
    { name: "ana", username: "an1" },
    { name: "juan", username: "ju2" },
    { name: "bety", username: "be3" },
    { name: "paco", username: "pa0" },
    { name: "luis", username: "lu5" }
];

// Datos para insertar en la tabla departamentos
const departmentsData = [
    { nombre: "Recepción" },
    { nombre: "Desarmado" },
    { nombre: "Pintura" },
    { nombre: "Laminación" },
    { nombre: "Armado" }
];

// Datos para insertar en la tabla empleados
const employeesData = [
    { nombre: "Carlos", correo: "carlos@example.com", departamento: 1 },
    { nombre: "Lucía", correo: "lucia@example.com", departamento: 2 },
    { nombre: "Pedro", correo: "pedro@example.com", departamento: 3 },
    { nombre: "María", correo: "maria@example.com", departamento: 4 },
    { nombre: "José", correo: "jose@example.com", departamento: 5 }
];

// Preparar sentencias de inserción
const insertUser = db.prepare(`INSERT INTO users (name, username) VALUES (?, ?)`);
const insertDepartment = db.prepare(`INSERT INTO departamentos (nombre) VALUES (?)`);
const insertEmployee = db.prepare(`INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)`);

// Insertar datos en la tabla users
usersData.forEach(user => {
    const result = insertUser.run(user.name, user.username);
    console.log("User Inserted:", result);
});

// Insertar datos en la tabla departamentos
departmentsData.forEach(department => {
    const result = insertDepartment.run(department.nombre);
    console.log("Department Inserted:", result);
});

// Insertar datos en la tabla empleados
employeesData.forEach(employee => {
    const result = insertEmployee.run(employee.nombre, employee.correo, employee.departamento);
    console.log("Employee Inserted:", result);
});

// Cerrar la conexión
db.close();
