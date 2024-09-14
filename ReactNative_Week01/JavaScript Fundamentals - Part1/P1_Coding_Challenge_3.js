/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
*/

/*
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// 1. Calculate the average score for each team, using the test data above
var DolphinsScore_1 = [96, 108, 89];
var DolphinsScore_Bonus_1 = [97, 112, 101];
var DolphinsScore_Bonus_2 = [97, 112, 101];

var KoalasScore_1 = [88, 91, 110];
var KoalasScore_Bonus_1 = [109, 95, 123];
var KoalasScore_Bonus_2 = [109, 95, 106];

const calculateAverage = scores => scores.reduce((a, b) => a + b, 0) / scores.length;

var averageDolphinsScore = calculateAverage(DolphinsScore_1);
var averageKoalasScore = calculateAverage(KoalasScore_1);

var averageDolphinsBonusScore_1 = calculateAverage(DolphinsScore_Bonus_1);
var averageKoalasBonusScore_1 = calculateAverage(KoalasScore_Bonus_1);

var averageDolphinsBonusScore_2 = calculateAverage(DolphinsScore_Bonus_2);
var averageKoalasBonusScore_2 = calculateAverage(KoalasScore_Bonus_2);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if (averageDolphinsScore > averageKoalasScore) {
    console.log("Dolphins is the winner");
}
else if (averageDolphinsScore < averageKoalasScore) {
    console.log("Koalas is the winner");
} else {
    console.log("Draw");
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks
if (averageDolphinsBonusScore_1 >= 100 && averageDolphinsBonusScore_1 > averageKoalasBonusScore_1) {
    console.log("Dolphins is the winner (Bonust 1)");
}
else if (averageKoalasBonusScore_1 >= 100 && averageDolphinsBonusScore_1 < averageKoalasBonusScore_1) {
    console.log("Koalas is the winner (Bonust 1)");
} else {
    console.log("No team wins (Bonust 1)");
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
if (averageDolphinsBonusScore_2 === averageKoalasBonusScore_2 && averageDolphinsBonusScore_2 >= 100 && averageKoalasBonusScore_2 >= 100) {
    console.log("It's a draw!");
}
else if (averageDolphinsBonusScore_2 >= 100 && averageDolphinsBonusScore_2 > averageKoalasBonusScore_2) {
    console.log("Dolphins is the winner (Bonust 2)");
}
else if (averageKoalasBonusScore_2 >= 100 && averageKoalasBonusScore_2 > averageDolphinsBonusScore_2) {
    console.log("Koalas is the winner (Bonust 2)");
}
else {
    console.log("No team wins the trophy.");
}
