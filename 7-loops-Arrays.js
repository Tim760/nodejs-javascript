'use strict';

for (let i=0; i < 5; i++)
{
    console.log(i);
}

// strange notation used inside console.log that works from chatGPT, must use ` instead of '
let count = 0;

do {
  console.log(`Count: ${count}`);
  count++;
} while (count < 5);

// Arrays are not required to declare datatypes, so it can include strings and numbers
let days =['Monday', 'Tuesday', 'Wednesday', 4, 5, 6, 'Sunday'];

let index = 0;
do {
    console.log(days[index]);
    index++;
}
while (index < days.length);

// push method to add element to end of array, such as strings, numbers, or arrays themselves inside the array
days.push('Christmas');
days.push(['Easter', 'New Years']);

// use process.stdout.write() for printing on the same line
process.stdout.write(days[7] + ' printed on the same line\t tab');
console.log(days[8]);

