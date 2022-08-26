function ticketCinema(input){

    let index = 0;
    let command = input[index++];
    let kidCounter = 0;
    let standartCounter = 0;
    let totalTicketCounter = 0;
    let studentCounter = 0;

    while(command !== 'Finish'){
        let film = command;
        let freeSpace = Number(input[index++]);

        let ticketType = input[index++];
        let ticketCounter = 0;
        while(ticketType !== 'End'){
            ticketCounter++
            switch(ticketType){
                case 'standard': standartCounter++; break;
                case 'student': studentCounter++; break;
                case 'kid': kidCounter++;break;
            }

            if(ticketCounter >= freeSpace){
                break;
            }
            ticketType = input[index++]
        }
        totalTicketCounter += ticketCounter;
        let capacity = (ticketCounter / freeSpace * 100);
        console.log(`${film} - ${capacity.toFixed(2)}% full.`);
        command = input[index++]
        
    }
    let studentTickets = studentCounter / totalTicketCounter * 100;
    let standardTickets = standartCounter / totalTicketCounter * 100;
    let kidsTickets = kidCounter / totalTicketCounter * 100;
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${studentTickets.toFixed(2)}% student tickets.`);
    console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTickets.toFixed(2)}% kids tickets.`);
}
ticketCinema(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
