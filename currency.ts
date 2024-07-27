#!/usr/bin/env node

import inquirer from "inquirer";



const base_Currency: any = {
  USD: 1,
  PKR: 280,
  EUR: 0.91,
  INR: 74.57,
  GBP: 0.76,
  QAR:3.64,
  AFN:71.59,
  RIYAL:3.75,
  JPY:154.63,
  TRY:32.49
};



let operation = await inquirer.prompt([
  {
    name: "first_currency",
    type: "list",
    message: "please select your currency",
    choices: ["USD", "PKR", "EUR", "IND", "GBP","QAR","AFN","RIYAL","JPY","TRY"],
  },
  {
    name: "convert_currency",
    type: "list",
    message: "please select convert currency",
    choices: ["USD", "PKR", "EUR", "IND", "GBP","QAR","AFN","RIYAL","JPY","TRY"],
  },
  {
    
    name: "amount",
    type: "number",
    message: "Enter how many Amount do you want to convert",
    default:"1"
  },
]);

let from_currency = base_Currency[operation.first_currency];
let TO_currency = base_Currency[operation.convert_currency];
let amount = operation.amount;

let convert = amount / from_currency;
let tocurrency = convert * TO_currency;

let result = tocurrency.toFixed(2);

console.log(result);


