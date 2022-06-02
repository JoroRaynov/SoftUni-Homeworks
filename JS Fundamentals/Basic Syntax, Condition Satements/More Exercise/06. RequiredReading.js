function requiredReading(pages, pagReadInHour, days){

let timeRreading = pages / pagReadInHour;

let requiredReading = timeRreading / days;


console.log(requiredReading);



}
requiredReading(212, 20, 2);