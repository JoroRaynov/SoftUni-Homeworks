function invalidNumber(i) {
    let numb = Number(i[0])
    if (numb === 0 || numb >= 100 && numb <= 200) {

    } else {
        console.log("invalid");
    }
}
invalidNumber(['150'])