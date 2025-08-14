import readline from "readline-sync";

console.log("============================")
console.log("====== Instagram Login======")
console.log("============================")

let username = readline.question("Enter your username : ");
let password = readline.question("Enter your password : ",{hideEchoBack: true,});
let email = readline.questionEMail("What is your email :");

let age = readline.questionInt("What is your age :");
console.log(username, password, email, age);