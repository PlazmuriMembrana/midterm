let input = Number(prompt("Enter Amount attempts: "));
while(isNaN(input)){
    alert("enter Numeric value");
    input = Number(prompt("Enter Amount attempts: "));
}
let num = Number(prompt("Enter Secret Number"));
while(isNaN(num)){
    alert("enter Numeric value");
    input = Number(prompt("Enter Amount attempts: "));
}
let secret = Math.floor(Math.random() * 1000);
let attempts = (input - 1);

for(let i = 0; i < attempts; i++){
    if(num>secret)
    {
    	num = prompt("secret number is less than "+num);
    }
    else
    {
    	num = prompt("secret number is greater than "+num);
    }
if(secret == num)
    {
    	alert("You Won!! \nYour Number Was "+secret+"\nattempts needed"+(i-1));
        break;
    }
}
if(num != secret){
    alert("You Lost!! \nYour Number Was "+secret+"\nattempts used "+input);
}