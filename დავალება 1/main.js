let a = Number(prompt("Enter First Number: "));
while(isNaN(a)){
    a = prompt("please, Enter enter numeric values!")
}
let b = Number(prompt("Enter Second Number: "));
while(isNaN(a)){
    a = prompt("please, Enter enter numeric values!")
}

let operation = prompt("Enter Arithmetical Operation:");

if(operation === '+'){
    alert(a+b);
}
else if(operation === '-'){
    alert(a-b);
}
else if(operation === '*'){
    alert(a*b);
}
else if(operation === '/'){
    alert(a/b);
}
else if(operation === '%'){
    alert(a%b);
}
else if(operation === '**'){
    alert(a**b);
}