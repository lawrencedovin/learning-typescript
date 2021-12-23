"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeDetails() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDeperatment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    printAdminDetails() {
        console.log(this.admins.length);
        console.log(this.admins);
    }
}
const technology = new ITDeperatment('0001', ['Othniel', 'Mark', 'Hosea']);
console.log(technology.admins);
// technology.addEmployee('Peter');
// technology.addEmployee('Richard');
// technology.printEmployeeDetails();
technology.addAdmin('Charles');
technology.printAdminDetails();
//# sourceMappingURL=app.js.map