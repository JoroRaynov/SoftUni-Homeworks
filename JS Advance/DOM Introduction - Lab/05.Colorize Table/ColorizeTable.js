function colorize() {
    // TODO
    let elements = document.querySelectorAll('tr:nth-of-type(2n)');
    let elArr = Array.from(elements);

    elArr.forEach(x=> x.style.backgroundColor = 'Teal');
    // elements.forEach(x => {
    //     x.style.backgroundColor = 'Teal'
    // });
    // console.log(elements);
}