function vacationBooksList(input){

    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNumber = Number(input[2]);

    let timeForRB = numberOfPages / pagesPerHour 
    let requiredHPD = timeForRB / daysNumber 
 console.log(requiredHPD)
}
vacationBooksList(["212 ",
"20 ",
"2 "])

