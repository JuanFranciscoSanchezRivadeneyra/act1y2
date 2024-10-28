import Database from "better-sqlite3";
const db = new Database('app.db');

// Funciones para la tabla departamentos

// Insertar un departamento
function insertDepartment(nombre) {
    const insert = db.prepare(`INSERT INTO departamentos (nombre) VALUES (?)`);
    const result = insert.run(nombre);
    console.log("Department Inserted:", result);
}

// Mostrar todos los departamentos
function showDepartments() {
    const query = db.prepare(`SELECT * FROM departamentos`);
    const departments = query.all();
    console.log("Departments:", departments);
}

// Buscar un departamento por ID
function searchDepartment(id) {
    const query = db.prepare(`SELECT * FROM departamentos WHERE id = ?`);
    const department = query.get(id);
    console.log("Department Found:", department);
}

// Modificar un departamento por ID
function updateDepartment(id, nombre) {
    const update = db.prepare(`UPDATE departamentos SET nombre = ? WHERE id = ?`);
    const result = update.run(nombre, id);
    console.log("Department Updated:", result);
}

// Eliminar un departamento por ID
function deleteDepartment(id) {
    const del = db.prepare(`DELETE FROM departamentos WHERE id = ?`);
    const result = del.run(id);
    console.log("Department Deleted:", result);
}

// Funciones para la tabla empleados

// Insertar un empleado
function insertEmployee(nombre, correo, departamento) {
    const insert = db.prepare(`INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)`);
    const result = insert.run(nombre, correo, departamento);
    console.log("Employee Inserted:", result);
}

// Mostrar todos los empleados
function showEmployees() {
    const query = db.prepare(`
        SELECT empleados.id, empleados.nombre, empleados.correo, departamentos.nombre AS departamento
        FROM empleados
        JOIN departamentos ON empleados.departamento = departamentos.id
    `);
    const employees = query.all();
    console.log("Employees:", employees);
}

// Buscar un empleado por ID
function searchEmployee(id) {
    const query = db.prepare(`
        SELECT empleados.id, empleados.nombre, empleados.correo, departamentos.nombre AS departamento
        FROM empleados
        JOIN departamentos ON empleados.departamento = departamentos.id
        WHERE empleados.id = ?
    `);
    const employee = query.get(id);
    console.log("Employee Found:", employee);
}

// Modificar un empleado por ID
function updateEmployee(id, nombre, correo, departamento) {
    const update = db.prepare(`UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?`);
    const result = update.run(nombre, correo, departamento, id);
    console.log("Employee Updated:", result);
}

// Eliminar un empleado por ID
function deleteEmployee(id) {
    const del = db.prepare(`DELETE FROM empleados WHERE id = ?`);
    const result = del.run(id);
    console.log("Employee Deleted:", result);
}

// Ejemplos de uso
insertDepartment("Mantenimiento");
showDepartments();
searchDepartment(1);
updateDepartment(1, "Recursos Humanos");
deleteDepartment(2);

insertEmployee("Carlos", "carlos@example.com", 1);
showEmployees();
searchEmployee(1);
updateEmployee(1, "Carlos Pérez", "carlosp@example.com", 2);
deleteEmployee(2);

// Cerrar la conexión a la base de datos
db.close();
