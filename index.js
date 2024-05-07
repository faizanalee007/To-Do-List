import inquirer from 'inquirer';
let todoList = [];
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
        }
    ]);
    if (addTodo.confirmation) {
        todoList.push(addTodo.add);
        console.log(`\nTask added to your todo list.`);
    }
    else {
        console.log('\nTask not added to your todo list.');
    }
    if (!addTodo.moreTask) {
        loopCondition = false;
    }
    console.log('\n--- Your Todo List ---\n');
    for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
    }
    console.log('----------------------');
}
