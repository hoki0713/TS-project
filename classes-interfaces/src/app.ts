abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];
  
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}



class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}



class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a vaild value.');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Account');
    this.lastReport = reports[0];
  }

  describe() {
    console.log('Accounting Department - ID :', this.id);
  }

  addEmployee(name: string) {
    if (name === 'Hoki') {
      return;
    }
    this.employees.push(name);    
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReport() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Emilia');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Hoki']);


it.addEmployee('Hoki');
it.addEmployee('Doki');

// accounting.employee[3] = 'Name';

it.describe();
it.printEmployeeInformation();

// const accountingCopy = { name: 'Sales', describe: accounting.describe};

// accountingCopy.describe();

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something report...');

console.log(accounting.mostRecentReport)


accounting.addEmployee('Hoki');
accounting.addEmployee('Doki');
// accounting.printReport();
// accounting.printEmployeeInformation();

accounting.describe();
