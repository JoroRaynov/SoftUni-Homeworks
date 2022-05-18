function districtArray(array) {

    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];

        for (let j = i + 1; j <= array.length; j++) {
            let nextEl = array[j];
            if (currentEl == nextEl) {
                array.splice(j, 1);
                j = j-1
            }

        }

    }
    console.log(array.join(' '));
}
districtArray([7, 8, 9, 7, 2, 3, 4, 1, 2])