 function triangleOfNumbers(n){

   

for (let i = 1; i <= n; i++) {
    line = '';
    for (let j = 1; j < i+1; j++) {
        line = line + i + ' '
        
    }
    console.log(line);
}
       
    }

triangleOfNumbers(5);