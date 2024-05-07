import inquirer from 'inquirer'

let todoList: string[] = [];
let loopCondition = true;

while (loopCondition) {
    let addTodo = await inquirer.prompt([
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
            when: (answers) => answers.confirmation, // Only ask this question if the user confirmed to add the task
        }
    ]);

    if (addTodo.confirmation) {
        todoList.push(addTodo.add);
        console.log(`Task added to your todo list.`);
    } else {
        console.log('Task not added to your todo list.');
        break; // Exit the loop and terminate the program
    }

    if (!addTodo.moreTask) {
        loopCondition = false;
    }

    console.log('\n--- Your Todo List ---');
    for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
    }
    console.log('----------------------');
}

console.log('Program terminated.');
