"use strict";
class Department {
    constructor(name, employees) {
        this.employees = [];
        this.name = name;
        this.employees = employees;
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
const technology = new Department('Technology', ['Gerry', 'Jon', 'Garth']);
technology.addEmployee('Peter');
technology.printEmployeeDetails();
//# sourceMappingURL=app.js.map