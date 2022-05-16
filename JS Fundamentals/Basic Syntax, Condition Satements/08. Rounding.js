function rounding(num, precision){

        if(precision > 15){
            precision = 15
        }
        
num = Number(num.toFixed(precision)); 


   console.log(num);
}
rounding(10.5, 3);