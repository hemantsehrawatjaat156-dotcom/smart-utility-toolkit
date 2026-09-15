const isEven = require("./isEven");

const numbers = [2, 5, 8, 11, 14];

console.log("Custom Module Demo");

numbers.forEach((number) => {
    if (isEven(number)) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
});