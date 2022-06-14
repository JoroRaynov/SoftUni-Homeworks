function solve(dates) {

    let regex = /\b(?<date>\d{2})(?<separator>(\.|\/|-))(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g;

    let validDates = regex.exec(dates);

    while (validDates !== null) {
        console.log(`Day: ${validDates.groups.date}, Month: ${validDates.groups.month}, Year: ${validDates.groups.year}`);
        validDates = regex.exec(dates);

    }
}
solve('13/Jul/1928, 10-Nov-1934, 25.Dec.1937, 01/Jan-1951, 23/sept/1973, 1/Feb/2016')
