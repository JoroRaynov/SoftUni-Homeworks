function coins(input){

    let change = Number(input[0]);
    change = Math.floor(change * 100);

    let counter = 0;

    while(change > 0){
        if(change >= 200){
            counter++
            change-=200
        } else if(change >= 100){
            counter++;
            change-= 100;
        } else if(change >= 50){
            counter++
            change-= 50;
        } else if(change >= 20){
            counter++
            change-= 20;
        } else if(change >= 10){
            counter++
            change-= 10;
        } else if(change >= 5){
            counter++
            change-= 5;
        } else if(change >= 2){
            counter++
            change -= 2;
        } else if(change >= 1){
            counter++
            change-=1;
        }
    }
    console.log(counter);
}
coins(["2.73"])