function rectangle(width, height, color) {
    let result = color.split('');
    let fCh = result.shift();
    fCh = fCh.toUpperCase();
    result.unshift(fCh);
    result = result.join('');
    return {
        width: width,
        height: height,
        color: result,

        calcArea: () => {
            return (width * height)
        },

    }

}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());