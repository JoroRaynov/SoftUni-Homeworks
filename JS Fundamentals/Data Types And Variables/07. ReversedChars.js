function reversedChars(a,b,c){

    let result = String(a + b + c).split('').reverse().join(' ')
    console.log(result);
}
reversedChars('A', 'B', 'C');