function signCheck(numOne, numTwo, numThree){
    let myArr = [numOne, numTwo, numThree];
  
    
let counter = 0;
for (let i = 0; i < myArr.length; i++) {
    let currNum = myArr[i].toString()
    if (currNum.includes('-')){
        counter++
    } else {
        continue;
    }
}

if(counter == 1 || counter == 3){
    console.log('Negative');

} else if (counter == 2 || counter == 0){
    console.log('Positive');
} 

}
signCheck( 5,
    12,
   -15
   )