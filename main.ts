import inquirer from "inquirer";
type anstype ={
    userguess:number
}
const systemgeneratenumber =  Math.floor(Math.random()*20);
//inquirer
const answer:anstype = await inquirer.prompt ([{
    message:"Enter your guess b/w 1 to 20",
    type:"number",
    name:"userguess",

}])
const {userguess} = answer
console.log(`your guess, ${userguess} , system, ${systemgeneratenumber}`)
if(userguess === systemgeneratenumber){
    console.log("Superb! your answer is correct \n Winner")
}
else{
    console.log("Try again better luck next time")
}