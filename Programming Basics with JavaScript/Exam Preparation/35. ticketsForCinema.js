function ticketsForCinema(input) {

    let index = 0;
    let command = input[index++];

    let kidsTickets = 0;
    let standardTickets = 0;
    let studentTickets = 0;
    let allTickets = 0;

    while (command !== 'Finish') {

        let totalTicketCounter = 0;

        let movieName = command;
        let freeSpace = Number(input[index++]);
        let typeTicket = input[index++];

        while (typeTicket !== 'End') {
            allTickets++
            totalTicketCounter++
            if (typeTicket === 'student') {
                studentTickets++

            } else if (typeTicket === 'standard') {

                standardTickets++
            } else if (typeTicket === 'kid') {

                kidsTickets++
            }
            if (totalTicketCounter >= freeSpace) {
                break;
            }
            typeTicket = input[index++];
        }
        let percFull = totalTicketCounter / freeSpace * 100;
        console.log(`${movieName} - ${percFull.toFixed(2)}% full.`);
        command = input[index++];
    }
    let percStudent = studentTickets / allTickets * 100;
    let percStandard = standardTickets / allTickets * 100;
    let percKids = kidsTickets / allTickets * 100;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${percStudent.toFixed(2)}% student tickets.`);
    console.log(`${percStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percKids.toFixed(2)}% kids tickets.`);


}
ticketsForCinema(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
])