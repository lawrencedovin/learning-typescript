class Department {
    protected employees: string [] = [];

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeDetails() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if(this.lastReport) return this.lastReport;
        throw new Error('No report found.');
    }

    set mostRecentReport(report: string) {
        if(!report) throw new Error('Please pass in a valid report.');
        this.addReport(report);
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(employee: string) {
        return employee === 'Max' ? null : this.employees.push(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
}


const accounting = new AccountingDepartment('0001', ['First Report', 'Second Report']);
accounting.addReport('Third Report');
console.log(accounting.mostRecentReport);