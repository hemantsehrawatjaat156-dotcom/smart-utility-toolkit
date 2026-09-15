const args = process.argv.slice(2);

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: node calculator.js <operation> <num1> <num2>");
    console.log("Operations: add, subtract, multiply, divide");
    process.exit();
}

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "subtract":
        result = num1 - num2;
        break;

    case "multiply":
        result = num1 * num2;
        break;

    case "divide":
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit();
        }
        result = num1 / num2;
        break;

    default:
        console.log("Error: Invalid operation.");
        process.exit();
}

console.log("Operation:", operation);
console.log("Numbers:", num1, num2);
console.log("Result:", result);