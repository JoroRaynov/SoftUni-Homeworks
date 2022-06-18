function adAstra(input) {

    let pattern = /([\||#]){1}(?<name>[A-Za-z\s]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>\d+)\1/g;
    let totalCalories = 0;
    let totalMaches = [];
    while ((match = pattern.exec(input)) != null) {

        let calories = Number(match.groups.calories);
        totalMaches.push(match.groups.name);

        totalCalories += calories;


    }
    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    while ((match = pattern.exec(input)) != null) {
        console.log(`Item: ${match.groups.name}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
    }
}
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
