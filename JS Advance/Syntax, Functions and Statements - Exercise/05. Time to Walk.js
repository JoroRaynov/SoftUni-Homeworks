function walking(steps, footprint, speedKmH){

    let distanceMeters = steps * footprint;
    let speedMeterSec = speedKmH / 3.6;
    let time = distanceMeters / speedMeterSec;
    let rest = Math.floor(distanceMeters / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMin * 60);
    let timeHr = Math.floor(time / 3600);

    if(timeHr < 10){
        timeHr = String(timeHr).padStart(2, '0');
    } 
    if(timeMin + rest < 10) {
        timeMin = timeMin + rest;
      timeMin = String(timeMin).padStart(2, '0');
    } else {
        timeMin = timeMin + rest;
    }
    if(timeSec < 10){
        timeSec =  String(timeSec).padStart(2, '0');
    }
    console.log(`${timeHr}:${timeMin}:${timeSec}`);



}
walking(4000, 0.60, 5);