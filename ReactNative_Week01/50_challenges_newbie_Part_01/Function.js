// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30)); // Example

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(fahrenheitToCelsius(86)); // Example

// 10. Calculate the sum of numbers in an array of numbers
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Example

// 11. Calculate the average of the numbers in an array of numbers
function averageArray(arr) {
    return sumArray(arr) / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5])); // Example

// 12. Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(getPositiveNumbers([-2, -1, 0, 1, 2])); // Example

// 13. Find the maximum number in an array of numbers
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 5, 3, 9, 2])); // Example

// 14. Print the first 10 Fibonacci numbers without recursion
function fibonacciSequence() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacciSequence());

// 15. Create a function that will find the nth Fibonacci number using recursion
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(10)); // Example

// 16. Create a function that will return a Boolean specifying if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // Example

// 17. Calculate the sum of digits of a positive integer number
function sumDigits(num) {
    return String(num).split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumDigits(1234)); // Example

// 18. Print the first 100 prime numbers
function printPrimes(limit){
    let count = 0;
    let n = 2;

    while (count < limit){
        if(isPrime(n)){
            console.log(n);
            count++;
        }
        n++;
    }
}
printPrimes(100); // Example

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”
function primesAfterN(p, n) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
        if (isPrime(num)) primes.push(num);
        num++;
    }
    return primes;
}
console.log(primesAfterN(5, 10)); // Example

// 20. Rotate an array to the left 1 position
function rotateLeft(arr) {
    arr.push(arr.shift());
    return arr;
}
console.log(rotateLeft([1, 2, 3, 4])); // Example

// 21. Rotate an array to the right 1 position
function rotateRight(arr) {
    arr.unshift(arr.pop());
    return arr;
}
console.log(rotateRight([1, 2, 3, 4])); // Example

// 22. Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4])); // Example

// 23. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Example

// 24. Create a function that will merge two arrays and return the result as a new array
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4])); // Example

// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
function symmetricDifference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
}
console.log(symmetricDifference([1, 2, 3], [2, 3, 4])); // Example
