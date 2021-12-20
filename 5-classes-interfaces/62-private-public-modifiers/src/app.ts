class Department {
    name: string;
    private employees: string [] = [];

    constructor(name: string) {
        this.name = name;
    }

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

const technology = new Department('Technology');
technology.addEmployee('Peter');
technology.addEmployee('Richard');
technology.printEmployeeDetails();