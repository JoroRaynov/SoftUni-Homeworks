function englishNameOfLastDigit(n){


let result = n % 10;
if (result === 0){
    console.log('zero');
} else if(result === 1){
    console.log('one');
} else if(result === 2){
    console.log('two');
} else if(result === 3){
    console.log('three');
} else if(result === 4){
    console.log('four');
} else if(result == 5){
    console.log('five');
} else if(result === 6){
    console.log('six');
} else if( result === 7){
    console.log('seven');
} else if (result === 8){
    console.log('eight');
} else if (result === 9){
    console.log('nine');
} 

}
englishNameOfLastDigit(210)