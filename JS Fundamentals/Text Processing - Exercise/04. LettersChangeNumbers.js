function solve(input) {

    let strings = input.split(' ');


    let result = 0;

    for (const line of strings) {
        if (line == '') {
            continue;
        }
        let tokens = line.split('');
        let firstChar = tokens.shift();
        let secondChar = tokens.pop();
        let theNum = Number(tokens.join(''));
        let symbols = firstChar.concat(secondChar);

        for (let i = 0; i < symbols.length; i++) {
            let charCode = symbols[i].charCodeAt();
            if (charCode > 64 && charCode < 91 && i == 0) { //Главни Първи
                let charPosition = charCode - 64;
                result += theNum / charPosition;
            } else if (charCode > 96 && charCode < 123 && i == 0) { // Малки първи
                let charPosition = charCode - 96;
                result += theNum * charPosition;
            }
            if (charCode > 64 && charCode < 91 && i == 1) { //Главни Втори
                let charPosition = charCode - 64;

                result -= charPosition
            } else if (charCode > 96 && charCode < 123 && i == 1) { // Малки Втори
                let charPosition = charCode - 96;
                result += charPosition;
            }
        }

    }

    result = (result).toFixed(2);
    console.log(result);

}
solve('P34562Z q2576f   H456z')