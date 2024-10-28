export class User {
    constructor(name, username) {
        this.name = name;
        this.username = username;
    }
}

export class Department {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

export class Employee {
    constructor(nombre, correo, departamento) {
        this.nombre = nombre;
        this.correo = correo;
        this.departamento = departamento;
    }
}
