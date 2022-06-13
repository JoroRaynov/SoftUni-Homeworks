function partyTime(input) {

    let vipGuests = [];
    let regularGuests = [];

    while (input[0] !== 'PARTY') {

        let currGuest = input.shift();
        if (currGuest.charAt(0) >= 0 || currGuest.charAt(0) <= 9) {
            vipGuests.push(currGuest);
        } else {
            regularGuests.push(currGuest);
        }
    }

    input.shift()
    for (const guest of input) {
        if (vipGuests.includes(guest)) {
            let index = vipGuests.indexOf(guest);
            vipGuests.splice(index, 1);
        } else if (regularGuests.includes(guest)) {
            let index = regularGuests.indexOf(guest);
            regularGuests.splice(index, 1);
        }
    }
    

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.forEach(x => console.log(x));
    regularGuests.forEach(x => console.log(x))
}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)