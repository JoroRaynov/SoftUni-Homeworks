function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfTheDay = input[1];


    if (degrees >= 10 && degrees <= 18) {
        switch (timeOfTheDay) {
            case 'Morning':
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';

                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case 'Afternoon':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins'
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (timeOfTheDay) {
            case 'Morning':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;

            case 'Afternoon':

                outfit = 'T-Shirt';
                shoes = 'Sandals';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case 'Evening':

                outfit = 'Shirt'
                shoes = 'Moccasins'
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
        }
    } else if (degrees >= 25)
        switch (timeOfTheDay) {
            case 'Morning':
                outfit = 'T-Shirt';
                shoes = 'Sandals'
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case 'Afternoon':
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;
            case 'Evening':
                outfit = 'Shirt';
                shoes = 'Moccasins';
                console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
                break;

        }
}

summerOutfit(["28", "Evening"])