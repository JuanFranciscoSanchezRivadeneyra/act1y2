import Database from "better-sqlite3";

class DaoBetterSqlite3 {
    constructor() {
        this.db = new Database("app.db");
    }

    // ---------------- CRUD para Users ----------------
    createUser(name, username) {
        const stmt = this.db.prepare("INSERT INTO users (name, username) VALUES (?, ?)");
        return stmt.run(name, username);
    }

    getAllUsers() {
        const stmt = this.db.prepare("SELECT * FROM users");
        return stmt.all();
    }

    getUserById(id) {
        const stmt = this.db.prepare("SELECT * FROM users WHERE id = ?");
        return stmt.get(id);
    }

    updateUser(id, name, username) {
        const stmt = this.db.prepare("UPDATE users SET name = ?, username = ? WHERE id = ?");
        return stmt.run(name, username, id);
    }

    deleteUser(id) {
        const stmt = this.db.prepare("DELETE FROM users WHERE id = ?");
        return stmt.run(id);
    }

    // ---------------- CRUD para Departamentos ----------------
    createDepartment(nombre) {
        const stmt = this.db.prepare("INSERT INTO departamentos (nombre) VALUES (?)");
        return stmt.run(nombre);
    }

    getAllDepartments() {
        const stmt = this.db.prepare("SELECT * FROM departamentos");
        return stmt.all();
    }

    getDepartmentById(id) {
        const stmt = this.db.prepare("SELECT * FROM departamentos WHERE id = ?");
        return stmt.get(id);
    }

    updateDepartment(id, nombre) {
        const stmt = this.db.prepare("UPDATE departamentos SET nombre = ? WHERE id = ?");
        return stmt.run(nombre, id);
    }

    deleteDepartment(id) {
        const stmt = this.db.prepare("DELETE FROM departamentos WHERE id = ?");
        return stmt.run(id);
    }

    // ---------------- CRUD para Empleados ----------------
    createEmployee(nombre, correo, departamento) {
        const stmt = this.db.prepare("INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)");
        return stmt.run(nombre, correo, departamento);
    }

    getAllEmployees() {
        const stmt = this.db.prepare(`
            SELECT empleados.id, empleados.nombre, empleados.correo, departamentos.nombre AS departamento
            FROM empleados
            JOIN departamentos ON empleados.departamento = departamentos.id
        `);
        return stmt.all();
    }

    getEmployeeById(id) {
        const stmt = this.db.prepare(`
            SELECT empleados.id, empleados.nombre, empleados.correo, departamentos.nombre AS departamento
            FROM empleados
            JOIN departamentos ON empleados.departamento = departamentos.id
            WHERE empleados.id = ?
        `);
        return stmt.get(id);
    }

    updateEmployee(id, nombre, correo, departamento) {
        const stmt = this.db.prepare("UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?");
        return stmt.run(nombre, correo, departamento, id);
    }

    deleteEmployee(id) {
        const stmt = this.db.prepare("DELETE FROM empleados WHERE id = ?");
        return stmt.run(id);
    }
}

export default DaoBetterSqlite3;
