let a = Number(prompt("Write first value", ));  
let b = Number(prompt("Write second value", ));
// you can enter two numbers yourself using this code.
let calculation = prompt("Enter the calculation type '-' '+'  '/'  '*'", );
// where we can enter the calculation type.
if(calculation == "+"){
    alert("Yig'indi: "  + ( a + b ) );
}
//  if we enter a "+" counting type, this code gives us the sum of the two numbers.

else if(calculation == "-"){
    alert("Ayirma: " + ( a - b));
}
// if we enter a "-" calculation type, this code gives us the difference of two numbers.

else if(calculation == "/"){
    alert("Bo'linma: " + ( a / b));
}
// if we enter a "/" calculation type, this code gives us a division of two numbers.

else if(calculation == "*"){
    alert("Ko'paytma: " + a * b);
}
// if we enter the calculation type "*", this code gives us two numbers
// allows you to multiply.

else{
    alert("Incorrect calculation type");
}
// if we enter "-", "+", "/", "*" other characters or numbers, it gives an error

