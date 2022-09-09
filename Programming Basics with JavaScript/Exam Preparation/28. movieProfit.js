function movieProfit(input){

    let name = input[0];
    let countDays = Number(input[1]);
    let countTickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percForCinema = Number(input[4]);


    let ticketsPrice = priceTicket * countTickets;
    let totalProfit = countDays * ticketsPrice;
    let profitPerc = totalProfit * percForCinema / 100;
    let profitForCinema = totalProfit - profitPerc;

    console.log(`The profit from the movie ${name} is ${profitForCinema.toFixed(2)} lv.`);




}
movieProfit(["The Programmer",
"20",
"500",
"7.50",
"7"])
