function calories(array){
    let obj = {};

    for (let i = 0; i < array.length; i+=2) {
        let product = array[i];
        let calories = Number(array[i+1]);
        obj[product] = calories;

    }

console.log(obj);

}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
