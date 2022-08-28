function barcodeGenerator(input){
    let index = 0;
    let startNum = Number(input[index++]);
    let finalNum = Number(input[index++]);
    let bufer = '';
    let strStartNumber = String(startNum)
    let strFinalNumber = String(finalNum)

    for(let a = strStartNumber[0]; a <= strFinalNumber[0]; a++){
        for(let b = strStartNumber[1]; b <= strFinalNumber[1];b++){
            for(let c = strStartNumber[2]; c <= strFinalNumber[2]; c++){
                for(let d = strStartNumber[3]; d <= strFinalNumber[3]; d++){
                    if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                        bufer += '' + a + b + c + d + ' ';
                    }
                }
            }
           
        }
    }

console.log(bufer);
}
barcodeGenerator(["2345",
"6789"])
