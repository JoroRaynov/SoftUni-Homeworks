function rotate(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let pop = arr.pop();
        arr.unshift(pop);
    }
    console.log(arr.join(' '));
}
rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);