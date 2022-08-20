function solve1(input){
     
    let target = Number(input[0]);
    let index = 1;
    let num = Number(input[index])
    let sum = 0;
    
    while(num < target){
        sum+= num
        index++
        num = Number(input[index]);
    }
    console.log(sum);
    }
    solve1(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])