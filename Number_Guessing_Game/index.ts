#! /usr/bin/env node
import inquirer from "inquirer";


//user input
const ans = await inquirer.prompt([
    {message:"Guess the number from 0-10", type:"number", name:"Guess"}
])


//random number to guess
const ran_num = Math.floor(Math.random()*10);



if(ans.Guess == ran_num){
    console.log("You got it right!")
}
else{
    console.log("Better luck, Next time")
}




