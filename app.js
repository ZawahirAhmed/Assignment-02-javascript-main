const num1 = parseInt(prompt('Enter the first number: '));
const num2 = parseInt(prompt('Enter the second number: '));

const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;

document.writeln(`The sum of ${num1} and ${num2} is Result: ${sum}`);
document.writeln("<br>"); 

document.writeln(`The difference of ${num1} and ${num2} is Result: ${diff}`);
document.writeln("<br>");

document.writeln(`The product of ${num1} and ${num2} is Result: ${product}`);
document.writeln("<br>"); 

document.writeln(`The quotient of ${num1} and ${num2} is Result: ${quotient}`);
document.writeln("<br>"); 

document.writeln(`The remainder of ${num1} divided by ${num2} is Result: ${remainder}`)


var userName= prompt("Enter a number for multiplication table:") ||6;

for (var i =1; i <= 10; i++){
    document.write(userName +"*" + i + "=" + userName * i + "<br>")
}


