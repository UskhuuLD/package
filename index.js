
import gradient from "gradient-string";
import chalkAnimation from 'chalk-animation';
import figlet from "figlet";
import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner'
const userdata = await inquirer.prompt(
    {
        name:'UserName', 
        type:"input",
        message:"neree pruulna uu",
    }
);
const q1 = await inquirer.prompt(
    {
        name:'UserName', 
        type:"rawlist",
        message:`${userdata.UserName} Delhiin hamgiin tom dalai yuve?`,
        choices:["atlanta ocean", "Indian ocean", "Pacific ocean"],
    }
);
const q2 = await inquirer.prompt(
    {
        name:'UserName', 
        type:"rawlist",
        message:`${userdata.UserName}  Delhiin 2r dain heden ond bolsn be ?`,
        choices:["1914", "1939", "1945"],
    }
);
const q3 = await inquirer.prompt(
    {
        name:'UserName', 
        type:"rawlist",
        message:`${userdata.UserName} Hundiin huchiig hen neesen be?`,
        choices:["Albert Einstein", "Isaac Newton", "Galileo Galilei"],
    }
);
const q4 = await inquirer.prompt(
    {
        name:'UserName', 
        type:"rawlist",
        message:`${userdata.UserName} hunii biyiin hamgiin tom erhten?`,
        choices:["zurh", "aris", "eleg"],
    }
);
const q5 = await inquirer.prompt(
       {
        name:'UserName', 
        type:"rawlist",
        message:`${userdata.UserName} gold iin temdeg ali ni ve`,
        choices:["Ag", "Au", "Fe"],
    }
);
console.log(userdata)
  const spinner = createSpinner('Run test').start()

setTimeout(() => {
  spinner.success()
}, 1000)

