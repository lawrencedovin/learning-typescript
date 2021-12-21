class Department {
    private employees: string [] = [];

    constructor(private id: string, public name: string) {}

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

const technology = new Department('0001', 'Technology');
technology.addEmployee('Peter');
technology.addEmployee('Richard');
technology.printEmployeeDetails();