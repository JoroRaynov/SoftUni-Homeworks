function commonElements(arr1, arr2) {

    // for (let i = 0; i < arr1.length; i++) {
    //     let element = arr1[i];
    //     if (arr2.includes(element)) {
    //         console.log(element);
    //     }

    // }
    for (const el of arr1) {
        if(arr2.includes(el)) {
            console.log(el);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);