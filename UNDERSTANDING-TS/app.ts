// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Hoki',
//   age: 27
// };

const person = {
  name: 'hoki',
  age: 27,
  hobbies: ['Sports', 'Cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}