function magicMatrices(matrix) {

    const result = [];
    let sumForRows = 0;

    for (let row = 0; row < matrix.length; row++) {
        result.push(matrix[row].reduce((a, b) => a + b, sumForRows));

        let sumForCols = 0;

        for (let cell = 0; cell < matrix.length; cell++) {
            sumForCols += matrix[cell][row];
        }
        result.push(sumForCols);
    }
    let check = result.shift();

    for (const num of result) {
        if (num !== check) {
            return false;
        }
    }
    return true;
}


console.log(magicMatrices([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]

));