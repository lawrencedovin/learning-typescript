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
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error('No report found.');
    }
    addEmployee(employee) {
        return employee === 'Max' ? null : this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
}
const accounting = new AccountingDepartment('0001', ['First Report', 'Second Report']);
accounting.addReport('Third Report');
console.log(accounting.mostRecentReport);
//# sourceMappingURL=app.js.map