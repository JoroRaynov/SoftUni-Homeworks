function solve(arr, enty, price) {
    let entypoint = arr[enty];
    let left = 0;
    let right = 0;
    for (let i = 0; i < enty; i++) {
        if (price == "cheap") {
            if (arr[i] < entypoint) {
                left += arr[i];
            }
        } else if (price == "expensive") {
            if (arr[i] >= entypoint) {
                left += arr[i];
            }
        }
    }
    for (let j = enty + 1; j < arr.length; j++) {
        if (price == "cheap") {
            if (arr[j] < entypoint) {
                right += arr[j];
            }
        } else if (price == "expensive") {
            if (arr[j] >= entypoint) {
                right += arr[j];
            }
        }
    }
    if (right < left) {
        console.log(`Left - ${left}`)
    } else if (right == left) {
        console.log(`Left - ${right}`)
    } else {
        console.log(`Right - ${right}`)
    }

}

solve([1, 5, 1],
    1,
    "cheap");