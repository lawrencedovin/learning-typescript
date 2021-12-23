class Department {
    constructor(private readonly id: string, public name: string) {}
}

class AccountingDepartment extends Department {
    private static instance: AccountingDepartment;
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }
    static getInstance() {
        if(AccountingDepartment.instance) return this.instance;
        this.instance = new AccountingDepartment('0001', ['First Report', 'Second Report']);
        return this.instance;
    }
}

const accounting = AccountingDepartment.getInstance();