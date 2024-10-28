import DaoBetterSqlite3 from "./DaoBetterSqlite3.js";
import { User, Department, Employee } from "./model.users.js";

const dao = new DaoBetterSqlite3();

// ------------------ CRUD para Users ------------------
// Crear un usuario
const newUser = new User("Ana", "ana123");
dao.createUser(newUser.name, newUser.username);

// Listar todos los usuarios
console.log("Usuarios:", dao.getAllUsers());

// Buscar un usuario por ID
console.log("Usuario con ID 1:", dao.getUserById(1));

// Actualizar un usuario
dao.updateUser(1, "Ana María", "ana_updated");

// Eliminar un usuario
dao.deleteUser(1);

// ------------------ CRUD para Departamentos ------------------
// Crear un departamento
const newDepartment = new Department("Logística");
dao.createDepartment(newDepartment.nombre);

// Listar todos los departamentos
console.log("Departamentos:", dao.getAllDepartments());

// Buscar un departamento por ID
console.log("Departamento con ID 1:", dao.getDepartmentById(1));

// Actualizar un departamento
dao.updateDepartment(1, "Recursos Humanos");

// Eliminar un departamento
dao.deleteDepartment(1);

// ------------------ CRUD para Empleados ------------------
// Crear un empleado
const newEmployee = new Employee("Carlos Pérez", "carlos@example.com", 1);
dao.createEmployee(newEmployee.nombre, newEmployee.correo, newEmployee.departamento);

// Listar todos los empleados
console.log("Empleados:", dao.getAllEmployees());

// Buscar un empleado por ID
console.log("Empleado con ID 1:", dao.getEmployeeById(1));

// Actualizar un empleado
dao.updateEmployee(1, "Carlos Méndez", "carlos.mendez@example.com", 2);

// Eliminar un empleado
dao.deleteEmployee(1);
