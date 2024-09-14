/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
*/

/*
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

// For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
const Mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
}

const John = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
}

// Create a 'calcBMI' method on each object to calculate the BMI (the same
//     method on both objects). Store the BMI value to a property, and also return it
//     from the method
Mark.calcBMI = function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}

John.calcBMI = function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}

//Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (Mark.calcBMI() > John.calcBMI()) {
    console.log(`${Mark.fullname}'s BMI (${Mark.BMI}) is higher than ${John.fullname}'s (${John.BMI})!`);
}
else if (John.BMI > Mark.BMI) {
    console.log(`${John.fullname}'s BMI (${John.BMI}) is higher than ${Mark.fullname}'s (${Mark.BMI})!`);
}
else {
    console.log(`${Mark.fullname}'s BMI (${Mark.BMI}) is equal to ${John.fullname}'s (${John.BMI})!`);
}
