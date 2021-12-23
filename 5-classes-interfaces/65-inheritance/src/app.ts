class Department {
    private employees: string [] = [];

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

class ITDeperatment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
    }

    addAdmin(admin: string) {
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