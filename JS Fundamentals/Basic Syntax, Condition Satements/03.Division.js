function division(n) {

    // let div2 = 0;
    // let div3 = 0;
    // let div6 = 0;
    // let div7 = 0;
    // let div10 = 0;

    // if (n % 2 === 0) {
    //     div2 = 2
    // }
    // if (n % 3 === 0) {
    //     div3 = 3
    // }
    // if (n % 6 === 0) {
    //     div6 = 6;
    // }
    // if (n % 7 === 0) {
    //     div7 = 7
    // }
    // if (n % 10 === 0) {
    //     div10 = 10
    // }
    // let theBiggestDiv = (Math.max(div2, div3, div6, div7, div10));
    // if (theBiggestDiv === 0) {
    //     console.log('Not divisible');
    // } else {
    //     console.log(`The number is divisible by ${theBiggestDiv}`);
    // }

    if(n % 10 === 0){
        console.log(`The number is divisible by 10`);
    } else if (n % 7 === 0){
        console.log(`The number is divisible by 7`);
    } else if (n % 6 === 0){
        console.log(`The number is divisible by 6`);
    } else if (n % 3 === 0){
        console.log(`The number is divisible by 3`);
    } else if (n % 2 === 0){
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }
}
division(15)