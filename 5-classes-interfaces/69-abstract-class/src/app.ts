abstract class Department {
    protected employees: string [] = [];

    constructor(protected readonly id: string, public name: string) {}

    abstract describe(this: Department): void;
}

class AccountingDepartment extends Department {

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
}


const accounting = new AccountingDepartment('0001', ['First Report', 'Second Report']);