function mountainRun(input){

    let recordInSec = Number(input[0]);
    let distance = Number(input[1]);
    let timeInSec = Number(input[2]);

    let timeForDistanceinSec = distance * timeInSec;
    let timesDelay50m = Math.floor(distance / 50);
    let delay = timesDelay50m * 30
    let totalTime = timeForDistanceinSec + delay;
    let diff = Math.abs(recordInSec - totalTime);
    
    if(totalTime < recordInSec){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }




}
mountainRun(["1377",
"389",
"3"])

