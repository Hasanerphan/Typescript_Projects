#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNum" },
  { message: "Enter Second Number", type: "number", name: "SecondNum" },
  {
    message: "Select one of the operators to perform option",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplacation", "Division"],
  },
]);

if (answer.operator == "Addition") {
  console.log(
    answer.FirstNum,
    "+",
    answer.SecondNum,
    "=",
    answer.FirstNum + answer.SecondNum
  );
} else if (answer.operator == "Subtraction") {
  console.log(
    answer.FirstNum,
    "-",
    answer.SecondNum,
    "=",
    answer.FirstNum - answer.SecondNum
  );
} else if (answer.operator == "Multiplacation") {
  console.log(
    answer.FirstNum,
    "x",
    answer.SecondNum,
    "=",
    answer.FirstNum * answer.SecondNum
  );
} else if (answer.operator == "Division") {
  console.log(
    answer.FirstNum,
    "/",
    answer.SecondNum,
    "=",
    answer.FirstNum / answer.SecondNum
  );
}
