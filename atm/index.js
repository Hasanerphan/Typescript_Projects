import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 3248;
let myId = "Hasan";
const answ = await inquirer.prompt([
    { message: "Enter your User ID", type: "input", name: "ID" },
    { message: "Enter your PIN", type: "number", name: "PIN" }
]);
if (answ.ID === myId && answ.PIN === myPin) {
    const sel = await inquirer.prompt([
        {
            message: "What do you want??",
            type: "list",
            name: "Options",
            choices: ["Withdraw", "Check Balance", "Exit"]
        }
    ]);
    if (sel.Options === "Withdraw") {
        const wd = await inquirer.prompt([{
                name: "withdraw",
                type: "number",
                message: "How much amount do you want to withdraw"
            }]);
        if (wd.withdraw <= myBalance) {
            myBalance = myBalance - wd.withdraw;
            console.log("$" + wd.withdraw + " has been withdrawn from your account");
            console.log("Your current balance is: $" + myBalance);
        }
        else if (wd.withdraw > myBalance) {
            console.log("Insufficent Balance");
        }
    }
    else if (sel.Options === "Check Balance") {
        console.log("Your current Balance is: " + myBalance);
    }
    else if (sel.Options === "Exit") {
        console.log("Exiting");
    }
}
else
    (console.log("Invalid ID or PIN"));
