// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Hoki',
//   age: 27
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'hoki',
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'auther']
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY = 8, AUTHOR = 10 }

const person = {
  name: 'hoki',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is Admin')
}