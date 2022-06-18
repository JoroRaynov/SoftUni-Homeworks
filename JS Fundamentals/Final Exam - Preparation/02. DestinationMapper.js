function destinationMapper(input) {

    let pattern = /([=|\/]){1}[A-Z][A-Za-z]{2,}\1/g;
    let dest = [];
    let travelP = 0;
    let destinations = input.match(pattern);
    if (destinations === null) {
        
    } else {
        for (const destination of destinations) {
            let result = destination.split(/[=\/]/g).join('');
            dest.push(result);
            travelP += result.length
        }

    }
    console.log(`Destinations: ${dest.join(', ')}`);
    console.log(`Travel Points: ${travelP}`);
}
destinationMapper("ThisIs some InvalidInput");