function balls(input) {
    let index = 0;
    let numBalls = Number(input[index++])

    let points = 0;

    let redCounter = 0;
    let orangeCounter = 0;
    let yelowCounter = 0;
    let whiteCounter = 0;
    let blackCounter = 0;
    let otherColour = 0;

    for (let i = 0; i < numBalls; i++) {
        let colour = input[index++]
        if (colour === 'red') {
            points += 5
            redCounter++
        } else if (colour === 'orange') {
            points += 10;
            orangeCounter++
        } else if (colour === 'yellow') {
            points += 15
            yelowCounter++
        } else if (colour === 'white') {
            points += 20;
            whiteCounter++
        } else if (colour === 'black') {
            points = Math.floor(points / 2);
            blackCounter++
        } else {
            points = points
            otherColour++
        }

    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redCounter}`);
    console.log(`Orange balls: ${orangeCounter}`);
    console.log(`Yellow balls: ${yelowCounter}`);
    console.log(`White balls: ${whiteCounter}`);
    console.log(`Other colors picked: ${otherColour}`);
    console.log(`Divides from black balls: ${blackCounter}`);
}
balls(['10',
'white',
'white',
'ee',
'red',
'orange',
'red',
'black',
'black',
'black',
'black'])