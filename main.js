#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Firstnumber",
        message: "Enter first number",
        type: "number"
    },
    {
        name: "Secondnumber",
        message: "Enter Second number",
        type: "number"
    },
    {
        name: "Operators",
        message: "What task you want to perform",
        type: "list",
        choices: ["Addition", "subtraction", "multipication", "division"]
    }
]);
if (answer.Operators === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.Operators === "subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.Operators === "multipication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.Operators === "multipication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.Operators === "division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
