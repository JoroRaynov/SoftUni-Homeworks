function gladiatorIventory(array) {

    let iventory = array.shift().split(' ');

    for (let i = 0; i < array.length; i++) {

        let item = array[i].split(' ')
        let comand = item.shift();
        item = item.toString();

        if (comand === 'Buy') {
            if (!iventory.includes(item)) {
                iventory.push(item);
            }
        } else if (comand === 'Trash') {

            if (iventory.includes(item)) {
                let indexOfItem = iventory.indexOf(item);
                iventory.splice(indexOfItem, 1);
            }
        } else if (comand === 'Repair') {

            if (iventory.includes(item)) {
                let indexOfItem = iventory.indexOf(item);
                iventory.splice(indexOfItem, 1);
                iventory.push(item);

            }
        } else if (comand === 'Upgrade') {
            let curItem = item.split('-')
            
            if (iventory.includes(curItem[0])) {
                let indexOfItem = iventory.indexOf(curItem[0]);
                iventory.splice(indexOfItem + 1, 0, `${curItem[0]}:${curItem[1]}`);

            }
        }
    }

    console.log(iventory.join(' '));
}
gladiatorIventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
])