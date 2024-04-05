import inquirer from "inquirer";

let list = [];

console.log("===========Todo List===========")

while (true) {
    const edit = await inquirer.prompt([
        {
            message: "Choose from below",
            type: "list",
            name: "Option",
            choices: ["Show list", "Add task", "Remove task", "Empty list", "Exit"],
        },
    ]);

    if (edit.Option === "Exit") {
        break; 
    }

    if (edit.Option === "Add task") {
        
        const add = await inquirer.prompt([
            {
                message:"List task",
                name:"Task",
                type:"input"
            }
        ]);

        list.push(add)

        

    } else if (edit.Option === "Remove task") {
        
        const rem = await inquirer.prompt([
            {
                message:"Enter task index you want to remove starting from zero",
                name:"removed",
                type:"number"
            }
        ]);

        console.log(list)
        list.splice(rem,1)
    
    }

    else if (edit.Option === "Show list") {
        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);
          }
    }

    else if (edit.Option === "Empty list"){
        console.log("Deleting tasks...")
        list.length = 0;
    }
}

console.log("Exiting program..."); // Optional message after exiting