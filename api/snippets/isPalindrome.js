function isPalindrom (str) {
  return str == str.split('').reverse().join('') ? "Palindrome!" : "Not a Palindrome!";
}

const fs = require('fs');
const stdinBuffer = fs.readFileSync(0);
const str = stdinBuffer.toString();

console.log(isPalindrom(str));