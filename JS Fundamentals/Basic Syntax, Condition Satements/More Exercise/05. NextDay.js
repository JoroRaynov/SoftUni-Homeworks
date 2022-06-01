function nextDay(year, month, day){

    let nextDay = new Date (year, month -1, day +1);
    let Year = nextDay.getFullYear();
    let Month = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();

    console.log(`${Year}-${Month}-${newDate}`);
}
nextDay(2016, 9, 28)