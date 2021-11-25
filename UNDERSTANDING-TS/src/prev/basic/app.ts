type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

// interface ElevatedEmployee  extends Admin, Employee {};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
	name: 'Hojeong',
	privileges: ['create-server'],
	startDate: new Date(),
};

type Combinable2 = string | number;
type Numaric = number | boolean;

type Universal = Combinable2 & Numaric;

function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: number): string;
function add2(a: Combinable2, b: Combinable2) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

const result = add2('Hojeong', 'Kim');
result.split(' ');

const fetchedUserData = {
	id: 'u1',
	name: 'Hojeong',
	job: {
		title: 'Developer',
		description: 'Working as Frontend developer',
	},
};

console.log(fetchedUserData?.job?.title);

const userInput2 = undefined;

const storedData = userInput2 ?? 'DEFAUT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
// 	console.log('Name: ' + emp.name);
// 	if ('privileges' in emp) {
// 		console.log('Privileges: ' + emp.privileges);
// 	}
// 	if ('startDate' in emp) {
// 		console.log('StartDate: ' + emp.startDate);
// 	}
// }

// printEmployeeInformation(e1);

// class Car {
// 	drive() {
// 		console.log('Driving...');
// 	}
// }

// class Truck {
// 	drive() {
// 		console.log('Driving a truck...');
// 	}

// 	loadCargo(amount: number) {
// 		console.log('Loading cargo ...' + amount);
// 	}
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
// 	vehicle.drive();
// 	// if ('loadCargo' in vehicle) {
// 	// 	vehicle.loadCargo(1000);
// 	// }

// 	if (vehicle instanceof Truck) {
// 		vehicle.loadCargo(1000);
// 	}
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
// 	type: 'bird';
// 	flyingSpeed: number;
// }

// interface Horse {
// 	type: 'horse';
// 	runningSpeend: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
// 	let speed;
// 	switch (animal.type) {
// 		case 'bird':
// 			speed = animal.flyingSpeed;
// 			break;
// 		case 'horse':
// 			speed = animal.runningSpeend;
// 	}
// 	console.log('Moving at speed' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 1000 });

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// // const userInputElement = document.getElementById(
// // 	'user-input'
// // )! as HTMLInputElement;

// // userInputElement.value = 'Hi there!';

// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
// 	(userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// interface ErrorContainer {
// 	// { email: 'Not a valid email', username: 'Must start with a character' }
// 	[prop: string]: string;
// }

// const errorBag: ErrorContainer = {
// 	email: 'Not a valid email',
// 	username: 'Must start with a capital character!',
// };
