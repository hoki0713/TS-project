class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];
  
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Hoki');
accounting.addEmployee('Doki');

// accounting.employee[3] = 'Name';

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'Sales', describe: accounting.describe};

// accountingCopy.describe();