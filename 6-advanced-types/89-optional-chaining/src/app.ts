type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const log = (phrase: string) => console.log(phrase);

type Employee = {
    name: string;
    startDate: Date;
};

type Admin = {
    name: string;
    privileges: string[];
};

type UknownEmployee = Employee | Admin;

function printEmployee(employee: UknownEmployee) {
    log(`Name: ${employee.name}`);
    if('privileges' in employee) log(`Privileges: ${employee.privileges}`);
    if('startDate' in employee) log(`Start Date: ${employee.startDate}`);
}

const employee1: Employee = {
    name: 'Lawrence',
    startDate: new Date()
};

printEmployee(employee1);

class Car {
    drive() {
        log('Driving...');
    }
}

class Truck {
    drive() {
        log('Driving a truck');
    }
    loadCargo(amount: number) {
        log(`Loading cargo... ${amount}`);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);