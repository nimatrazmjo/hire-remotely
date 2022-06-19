const fs = require('fs');
const stdinBuffer = fs.readFileSync(0);
const str = stdinBuffer.toString();

const arrayOfNumbers = str.split(',').map(i=>Number(i));

const factorial = arrayOfNumbers.map((integer) => {
   let final = Number(1)
   while (integer > 0) {
    final *= integer
    integer = integer - 1
  }
  return final
})

console.log(factorial.toString())