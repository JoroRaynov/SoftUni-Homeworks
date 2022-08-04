function sumInSec(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let sumInSec = first + second + third;
    
    let sumInMin = Math.floor(sumInSec / 60);
    let sec = sumInSec % 60;

    if (sec < 10) {
        console.log(`${sumInMin}:0${sec}`);
    } else {
        console.log(`${sumInMin}:${sec}`);

    }
}
sumInSec(["50",
"50",
"49"])



