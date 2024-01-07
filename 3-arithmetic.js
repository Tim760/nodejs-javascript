// Addition subtraction, multiplication, division, modulus
console.log(5 + 4);
console.log(5 - 4);
console.log(5 * 4);
console.log(5 / 4);
console.log(5 % 4);

let value = 2;

// Prints 2 because the POST increment [value++] increments 2 by 1 AFTER the line 11 log statement on line 12, not AT line 11.
console.log(value++);
// The console log at Line 14 Prints 4 because of the POST increment (2 + 1 = 3) processed at line 12 AS WELL as 
// the PRE-increment AT the log statement on line 14, so then 3 + 1 = 4.
console.log(++value);