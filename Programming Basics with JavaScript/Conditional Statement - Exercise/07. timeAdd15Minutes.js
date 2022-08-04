function timeAdd15Minutes(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMin = hours * 60 + minutes;
    timeInMin = timeInMin + 15;

    let h = Math.floor(timeInMin / 60);
    let m = timeInMin % 60;

    if (h >= 24) {
        h = 0;
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }

}
timeAdd15Minutes(["23", "59"])