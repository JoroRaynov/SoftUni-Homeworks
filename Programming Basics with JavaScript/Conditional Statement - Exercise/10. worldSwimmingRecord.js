function worldSwimmingRecord(input) {

    let recordInSec = (input[0]);
    let distanceInMeter = (input[1]);
    let timeInSec = (input[2]);

    let swim = distanceInMeter * timeInSec;
    let addTimeInMeter = Math.floor(distanceInMeter / 15)
    let addTimeInSec = addTimeInMeter * 12.5;

    let totalTimeInSec = (swim + addTimeInSec).toFixed(2)
    let diff = Math.abs(totalTimeInSec - recordInSec).toFixed(2)

    if (totalTimeInSec < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTimeInSec} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff} seconds slower.`);
    }
}
worldSwimmingRecord(["55555.67",
    "3017", "5.03"
])