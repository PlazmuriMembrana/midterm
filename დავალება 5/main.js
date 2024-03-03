let expression = prompt("Enter Your Two operand arithmetical operatin. \nfor example a + b:");

let components = expression.split(" ");

let a = parseInt(components[0]); 
let operation = components[1]; 
let b = parseInt(components[2]); 

if(operation === '+') {
    answer = (a + b);
}
else if(operation === '-'){
    answer = (a - b);
}
else if(operation === '*') {
    answer = (a * b);
}
else if(operation === '/') {
    answer = (a / b);
}
else if(operation === '%'){
    answer = (a % b);
}
else if(operation === '**'){
    answer = (a ** b);
}

let userInput = Number(prompt("Enter answer: "));

if(answer == userInput){
    alert("You are Right!");
}
else if(answer != userInput){
    for(let i = 0; i < 5; i++){
        attempt = 5 - i;
        userInput = prompt("try again! You Have "+attempt+" attempt!");
        if(userInput == answer){
            i = 4;
            alert("finally");
        }
        else if(i == 4){
            alert("You Failed \nTry Again!");
        }
    }
    
}







