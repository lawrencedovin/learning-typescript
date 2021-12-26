type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

// Similar to Interface Inheritance

interface Named {
    name: string;
}

interface AdminInterface extends Named {
    privileges: string[];
}

interface EmployeeInterface extends Named {
    startDate: Date;
}

class ElevatedEmployees implements AdminInterface, EmployeeInterface {
    name: string;
    privileges: string[];
    startDate = new Date();
    
    constructor(name: string, privileges: string[]) {
        this.name = name;
        this.privileges = privileges;
    }
}

const el = new ElevatedEmployees('Max', ['create-server']);

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;