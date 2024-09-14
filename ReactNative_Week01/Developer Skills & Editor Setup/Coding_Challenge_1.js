/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
days ... 21oC in 2 days ... 23oC in 3 days ..."
*/

/*
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

// Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
const arr = [17, 21, 23];

function printForecast1(arr){
    let forecastString = '';
    for (let i = 0; i < arr.length; i++) {
        forecastString += `... ${arr[i]}oC in ${i+1} days`
    }

    console.log(forecastString + "...");
}

printForecast1(arr);

// Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

/* Sub-Problems:

1. Iterate Through the Array:
- Loop through each temperature in the array.
- Track the index to determine the day number (starting from 1).

2. Format the Output String:
- Construct a substring for each temperature in the required format.
- Concatenate all these substrings into a single string.

3. Handle Edge Cases:
- Ensure the output format is consistent even if the array is empty.
- Properly space and punctuate the output.
*/

// Test datasets
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

// Function to generate the forecast string
function printForecast2(arr) {
    // Base case for empty array
    if (arr.length === 0) {
        console.log('...');
        return;
    }

    // Initialize the result string
    let forecastString = '';

    // Iterate through the array to format each temperature
    for (let i = 0; i < arr.length; i++) {
        forecastString += `... ${arr[i]}oC in ${i + 1} days `;
    }

    // Finalize and print the result
    forecastString += '...';
    console.log(forecastString);
}

printForecast2(arr1); 
printForecast2(arr2);






