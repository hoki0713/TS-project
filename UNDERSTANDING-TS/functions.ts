function addFunction(n1: number, n2: number): number {
  return n1 + n2;
}

function printResultFunction(num: number): void {
  console.log('Result : ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResultFunction(addFunction(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = addFunction;
// combineValues = printResultFunction;
// combineValues = 5;
console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
})