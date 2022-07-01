function towns(array) {

    let arr = [];
    // let pattern = /^[\|\s]$/g;
    
    let [city, latitude_, longitude_] = array.shift().split(/[\s\|]/g).filter(x => x.length > 0);
    for (let i = 0; i < array.length; i++) {
        let obj = {};

        let [town, latitude, longitude] = array[i].split(/[\|]/g).filter(x => x.length > 0);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        town = town.trim();
        obj[city] = town;
        obj[latitude_] = Number(latitude);
        obj[longitude_] = Number(longitude);
        arr.push(obj);
    }
console.log(JSON.stringify(arr));
}
towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);