function barcodes(input) {


    let pattern = /@[#]+([A-Z][A-Za-z\d]{4,}[A-Z])@[#]+/g;

    let products = input.shift();
   
    for (let i = 0; i < products; i++) {

        let word = input[i];
        let matched = word.match(pattern);

        if (matched != null) {
            matched = matched.join('');
            
            let num = '';

            for (const char of matched) {
                let charAt = char.charCodeAt(0)
                if (charAt > 47 && charAt < 58) {
                    num += String.fromCharCode(charAt)
                }
            }
            if (num === '') {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${num}`);
            }
        } else {
            console.log('Invalid barcode');
        }
        matched = pattern.exec(input)
    }


}
barcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
