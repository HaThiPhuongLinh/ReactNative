/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
*/

/*
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// 1. Store Mark's and John's mass and height in variables
var MarkMass = 78;
var MarkHeight = 1.65;

var JohnMass = 92;
var JohnHeight = 1.95;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
var MarkBMI = MarkMass / MarkHeight ** 2;
var JohnBMI = JohnMass / JohnHeight ** 2;

// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
var markHigherBMI = MarkBMI > JohnBMI;

// 4. Print a nice output to the console, saying who has the higher BMI. The message is either
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
console.log("Mark's BMI: " + MarkBMI);
console.log("John's BMI: " + JohnBMI);

if (markHigherBMI == true) {
    console.log("Mark's BMI is higher than John's");
}
else {
    console.log("John's BMI is higher than Mark's!");
}

// Use a template literal to include the BMI values in the outputs. Example: 
// "Mark's BMI (28.3) is higher than John's (23.9)!"
if (markHigherBMI == true) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
}
else {
    console.log(`John's BMI (${JohnBMI})  is higher than Mark's (${MarkBMI})!`);
}


