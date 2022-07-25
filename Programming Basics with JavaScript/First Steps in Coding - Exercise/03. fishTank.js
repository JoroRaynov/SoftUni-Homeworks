function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigh = Number(input[2]);
    let percentage = Number(input[3]);

    let tankVolume = length * width * heigh;
    let tankVolumeInL = tankVolume * 0.001
    let total = tankVolumeInL - (tankVolumeInL * (percentage / 100));


    console.log(total);



}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)