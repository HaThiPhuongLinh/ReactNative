//1. Print numbers from 1 to 10
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

//2. Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

//3. Print the multiplication table with 7
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//4. Print all the multiplication tables with numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

//5. Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

//6. Calculate 10!
let factorial = 1;
for (let i = 1; i <= 10; i++) {
  factorial *= i;
}
console.log(factorial);


//7. Calculate the sum of even numbers greater than 10 and less than 30
let sumEven = 0;
for (let i = 12; i < 30; i += 2) {
  sumEven += i;
}
console.log(sumEven);
