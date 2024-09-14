/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
*/

/*
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

// Create one player array for each team (variables 'players1' and 'players2')
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
console.log('Goalkeeper for Bayern Munich:', gk);
console.log('Field players for Bayern Munich:', fieldPlayers);

// Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Bayern Munich final roster:', players1Final);

// Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
    team1: team1Odd,
    draw: drawOdd,
    team2: team2Odd
} = game.odds;

console.log('Team 1 Odd:', team1Odd);
console.log('Draw Odd:', drawOdd);
console.log('Team 2 Odd:', team2Odd);

// Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
function printGoals(...players) {
    console.log('Goals scored by players:', players);
    console.log('Total goals scored:', players.length);
}

// Test the printGoals function
printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// const teamPlayers = ['Lewandowski', 'Gnarby', 'Hummels'];
// printGoals(...teamPlayers); 

// The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
const moreLikelyToWin = game.odds.team1 < game.odds.team2 ? game.team1 : game.team2;
console.log('Team more likely to win:', moreLikelyToWin);

// Loop through game.scored and print the goal number and player name
// for (const [index, player] of game.scored.entries()){
//     console.log(`Goal ${index + 1}: ${player}`);
// }

game.scored.forEach((player, index) => {
    console.log(`Goal ${index + 1}: ${player}`);
});

// Calculate and log the average odd
const odds = Object.values(game.odds);
let totalOdd = 0;

for (const odd of odds) {
    totalOdd += odd;
}

const averageOdd = totalOdd / odds.length;
console.log('Average odd:', averageOdd);

// Print the odds in a formatted way
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

const scorers = {};

for(const player of game.scored){
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
}

console.log(scorers);

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🟨 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 Yellow card'],
]);

// Task 1: Create an array 'events' of different game events (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log('Unique game events:', events);

// Task 2: Remove unfair yellow card event from minute 64
gameEvents.delete(64);
console.log('Updated game events after removing yellow card from minute 64:', gameEvents);

// Task 3: Compute and log "An event happened, on average, every 9 minutes"
const totalMinutes = 90;
const eventCount = gameEvents.size;
const averageTime = totalMinutes / eventCount;
console.log(`An event happened, on average, every ${averageTime} minutes`);

// Task 4: Loop over 'gameEvents' and log each element, marking first or second half
gameEvents.forEach((event, minute) => {
    const half = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
    console.log(`${half} ${minute}: ${event}`);
});

