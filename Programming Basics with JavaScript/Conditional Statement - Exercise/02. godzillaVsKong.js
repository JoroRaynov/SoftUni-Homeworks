function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let broiStatisti = Number(input[1]);
    let cenaOblekZaEdinStat = Number(input[2]);

    let dekor = budget * 0.10
    let oblekloPrice = 0;



    if (broiStatisti > 150) {
        oblekloPrice = broiStatisti * (cenaOblekZaEdinStat * 0.90)
    } else {
        oblekloPrice = broiStatisti * cenaOblekZaEdinStat;
    }

    let sum = dekor + oblekloPrice;

    let diff = Math.abs(budget - sum).toFixed(2);


    if (sum > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${diff} leva more.`);

    } else {
        (sum <= budget)
        console.log('Action!');
        console.log(`Wingard starts filming with ${diff} leva left.`);
    }

}
godzillaVsKong(["9587.88",
"222",
"55.68"])

