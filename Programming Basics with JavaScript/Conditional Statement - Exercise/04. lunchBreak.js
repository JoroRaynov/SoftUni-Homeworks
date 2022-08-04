function lunchBreak(input) {

    let nameOfSerial = input[0];
    let timeEpisode = Number(input[1]);
    let timeBreak = Number(input[2]);

    let timeLunch = timeBreak / 8;
    let timeOtdih = timeBreak / 4;
    let timeLeft = timeBreak - timeLunch - timeOtdih;

    let diff = Math.abs(timeLeft - timeEpisode);
    if (timeLeft >= timeEpisode) {
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(diff)} more minutes.`);
    }


}
lunchBreak(["Teen Wolf",
    "48",
    "60"
])