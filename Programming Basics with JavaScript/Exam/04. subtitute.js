function subtitute(input) {
    let firstNumFirstDigitStart = Number(input[0]);
    let firstNumSecondDigitStart = Number(input[1]);
    let secondNumFirstDigitStart = Number(input[2]);
    let secondNumSecondDigitStart = Number(input[3]);

    let counter = 0;
    let hasEnded = false;
    let Isvalid = true;

    for (let firstNumFirstDig = firstNumFirstDigitStart; firstNumFirstDig <= 8; firstNumFirstDig++) {
        for (let firstNumSecondDig = 9; firstNumSecondDig >= firstNumSecondDigitStart; firstNumSecondDig--) {
            for (let secondNumFirstDig = secondNumFirstDigitStart; secondNumFirstDig <= 8; secondNumFirstDig++) {
                for (let secondNumSecondDig = 9; secondNumSecondDig >= secondNumSecondDigitStart; secondNumSecondDig--) {
                     if(firstNumFirstDig % 2 == 0 &&secondNumFirstDig % 2 == 0 &&firstNumSecondDig % 2 != 0 &&secondNumSecondDig % 2 != 0){
                       Isvalid = true;
                        }
                        

                    let firstNum = firstNumFirstDig * 10 + firstNumSecondDig;
                    let secondNum = secondNumFirstDig * 10 + secondNumSecondDig;

                    if (Isvalid && firstNum == secondNum) {
                        console.log(`Cannot change the same player.`);
                    } else if (Isvalid && firstNum != secondNum) {
                        console.log(`${firstNumFirstDig}${firstNumSecondDig} - ${secondNumFirstDig}${secondNumSecondDig}`);
                        counter++;
                    }
                    if (counter >= 6) {
                        hasEnded = true;
                    }
                    if (hasEnded) {
                        break;
                    }
                }
                if (hasEnded) {
                    break;
                }
            }
            if (hasEnded) {
                break;
            }
        }
        if (hasEnded) {
            break;
        }
    }

}

subtitute(["6",
"7",
"5",
"6"])

