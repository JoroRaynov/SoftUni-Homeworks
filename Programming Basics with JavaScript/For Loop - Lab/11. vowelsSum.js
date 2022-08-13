function vowelsSum(input){

    let word = input[0]
    let sumOfLetters = 0;

    for(let i = 0; i < word.length; i++){
        let letter = word[i];
        let numberValue = 0;

        if(letter === 'a'){
            numberValue = 1;

        } else if(letter === 'e'){
            numberValue = 2;

        } else if(letter === 'i'){
            numberValue = 3;

        } else if(letter === 'o'){
            numberValue = 4;

        } else if(letter === 'u'){
            numberValue = 5;
        }
        sumOfLetters = sumOfLetters + numberValue;
        
    }
    console.log(sumOfLetters);
}
vowelsSum(['hello'])