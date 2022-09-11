function oscarsWeekIncinema(input) {

    let nameMovie = input[0];
    let typeHall = input[1];
    let selledTickets = Number(input[2]);
    let price = 0;
    switch (typeHall) {
        case 'normal':
            if (nameMovie === 'A Star Is Born') {
                price = selledTickets * 7.5;
            } else if (nameMovie === 'Bohemian Rhapsody') {
                price = selledTickets * 7.35;
            } else if (nameMovie === 'Green Book') {
                price = selledTickets * 8.15;
            } else if (nameMovie === 'The Favourite') {
                price = selledTickets * 8.75;
            }
            break;
        case 'luxury':
            if (nameMovie === 'A Star Is Born') {
                price = selledTickets * 10.50;
            } else if (nameMovie === 'Bohemian Rhapsody') {
                price = selledTickets * 9.45
            } else if (nameMovie === 'Green Book') {
                price = selledTickets * 10.25;
            } else if (nameMovie === 'The Favourite') {
                price = selledTickets * 11.55;
            }
            break;
        case 'ultra luxury':
            if (nameMovie === 'A Star Is Born') {
                price = selledTickets * 13.50;
            } else if (nameMovie === 'Bohemian Rhapsody') {
                price = selledTickets * 12.75
            } else if (nameMovie === 'Green Book') {
                price = selledTickets * 13.25;
            } else if (nameMovie === 'The Favourite') {
                price = selledTickets * 13.95;
            }
            break;
    }

    console.log(`${nameMovie} -> ${price.toFixed(2)} lv.`);


}
oscarsWeekIncinema(["A Star Is Born", "luxury", "42"])