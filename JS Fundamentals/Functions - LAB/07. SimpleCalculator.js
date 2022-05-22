function calculator(firstNum, secondNum, operator) {

 let multiply = (a,b) => a * b

 let divide = (a,b) => a / b

 let add = (a,b) => a + b;

 let subtract = (a,b) => a - b;

 if(operator === 'multiply'){
    console.log(multiply(firstNum, secondNum)); 

 } else if (operator === 'divide'){
   console.log(divide(firstNum, secondNum)); 

 } else if (operator === 'add'){
    console.log(add(firstNum, secondNum)); 
    
 } else if (operator === 'subtract'){
    console.log(subtract(firstNum, secondNum)); 
 }



}
 calculator(40,
    8,
    'divide'
    );