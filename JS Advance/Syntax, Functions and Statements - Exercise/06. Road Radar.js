function radar(speed, area){

    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    if(speed <= limits[area]){
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`);
    } else {
        let status = '';
        let difference = speed - limits[area];
        if(difference <= 20){
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
      console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limits[area]} - ${status}`);  
    }
}
radar(200, 'motorway');