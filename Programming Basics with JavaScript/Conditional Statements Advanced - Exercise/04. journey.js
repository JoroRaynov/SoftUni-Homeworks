function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    destination = ""
    place = ""

    if (budget <= 100) {
        destination = 'Bulgaria';

        if (season === 'summer') {
            spendMoney = budget * 0.30;
            place = 'Camp';
        } else if (season === 'winter') {
            spendMoney = budget * 0.70;
            place = 'Hotel';
        }

    } else if (budget <= 1000) {
        destination = 'Balkans'
        if (season === 'summer') {
            spendMoney = budget * 0.40;
            place = 'Camp'
        } else if (season === 'winter') {
            spendMoney = budget * 0.80;
            place = 'Hotel';
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        place = 'Hotel';
        spendMoney = budget * 0.9
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${spendMoney.toFixed(2)}`);
}






journey(["312", "summer"])