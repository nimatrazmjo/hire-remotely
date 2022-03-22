function isPalindrom (str) {
  return str == str.split('').reverse().join('') ? 1 : 0;
}

const fs = require('fs');
const stdinBuffer = fs.readFileSync(0);
const str = stdinBuffer.toString();
console.log(isPalindrom(str));