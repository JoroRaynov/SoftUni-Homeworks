function yardGreenings(input) {

    let kvmForGreen = Number(input[0]);
    let allYard = kvmForGreen * 7.61;
    let discount = allYard * 0.18;
    let finalPrice = allYard - discount;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yardGreenings(["550"])