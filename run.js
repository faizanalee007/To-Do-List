"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todoList = [];
var loopCondition = true;
while (loopCondition) {
    var addTodo = await inquirer_1.default.prompt([
        {
            name: 'add',
            type: 'input',
            message: 'What do you want to add?',
        },
        {
            name: 'confirmation',
            type: 'confirm',
            message: 'Are you sure you want to add this to your todo list?',
            default: true,
        },
        {
            name: 'moreTask',
            type: 'confirm',
            message: 'Do you want to add more tasks to your todo list?',
            default: false,
            when: function (answers) { return answers.confirmation; }, // Only ask this question if the user confirmed to add the task
        }
    ]);
    if (addTodo.confirmation) {
        todoList.push(addTodo.add);
        console.log("Task added to your todo list.");
    }
    else {
        console.log('Task not added to your todo list.');
        break; // Exit the loop and terminate the program
    }
    if (!addTodo.moreTask) {
        loopCondition = false;
    }
    console.log('\n--- Your Todo List ---');
    for (var i = 0; i < todoList.length; i++) {
        console.log("".concat(i + 1, ". ").concat(todoList[i]));
    }
    console.log('----------------------');
}
console.log('Program terminated.');
