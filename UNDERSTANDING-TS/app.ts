// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Hoki',
//   age: 27
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'hoki',
  age: 27,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'auther']
}

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}