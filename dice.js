const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

console.log("Dice Rolling Started...");

for (let i = 1; i <= 5; i++) {

    const diceValue = rollDice();

    console.log(
        "Roll " + i + ": Dice Rolled: " + diceValue
    );
}

console.log("Dice Rolling Completed.");