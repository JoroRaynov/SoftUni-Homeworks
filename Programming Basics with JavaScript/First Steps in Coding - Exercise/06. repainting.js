function repainting(input) {

    let nailonKVM = Number(input[0]);
    let paintInLiter = Number(input[1]);
    let thinnerInLiter = Number(input[2]);
    let hoursFinish = Number(input[3]);

    let amountForNailon = (nailonKVM + 2) * 1.50;
    let amountForPaint = (paintInLiter + (paintInLiter * 0.10)) * 14.50;
    let amountForThinner = thinnerInLiter * 5.00;
    let amountForBags = 0.40;
    let amountForMaterials = amountForNailon + amountForPaint + amountForThinner + amountForBags;
    let amountForWorkers = (amountForMaterials * 0.30) * hoursFinish;

    let totalAmount = amountForMaterials + amountForWorkers;


    console.log(totalAmount);

}
repainting(["5 ",
"10 ",
"10 ",
"1 "]
)