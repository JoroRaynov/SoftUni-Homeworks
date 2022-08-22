function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1])
    let s = ''

    for (let i = floors; i > 0; i--) {
        for (let b = 0; b < rooms; b++) {
            if (i === floors) {
                s += (`L${i}${b} `)
            } else if (i % 2 !== 0) {
                s += (`A${i}${b} `)
            } else if (i % 2 === 0) {
                s += (`O${i}${b} `)
            }
        }
        console.log(s)
        s = ''
    }
}
building(["6", "4"])
