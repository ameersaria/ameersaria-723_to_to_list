#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
let todos = [];
console.log(chalk.yellow.bold("\n \t Welcome to Ameer Saria's - To-Do-Application \n"));

let condition=true;

while (condition)  {

let addTask= await inquirer.prompt(
    [
        {
            name:"task",
            message:chalk.green("Enter your first task!"),
            type:"input"
        },
        {
            name:"addMore",
            type:"confirm",
            message:"Do you want to add more?",
            default:"false"
        },
    ]
)
todos.push(addTask.task);{
console.log(`${addTask.task} is added to todo-list successfully.`);
}
condition=addTask.addMore;

}
console.log("Your updated todo-list is:", todos);