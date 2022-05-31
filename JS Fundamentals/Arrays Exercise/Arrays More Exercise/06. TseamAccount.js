function tseamAccount(array) {

    let collection = array.shift().split(' ');
    let index = 0;
    let command = array[index++]


    while (command !== 'Play!') {
        if(index >= array.length) return;
        let operation = command.split(' ')

        if (operation[0] === 'Install') {
            if (collection.includes(operation[1])) {
                continue
            } else {
                collection.push(operation[1]);
            }
        }else if (operation[0] === 'Uninstall') {
            if (collection.includes(operation[1])) {
                collection = collection.filter(word => word !== operation[1])
            }

        }else if (operation[0] === 'Update') {
            if (collection.includes(operation[1])) {
                collection  = collection.filter(word => word !== operation[1])

                collection.push(operation[1])
            }
        } else if (operation[0] === 'Expansion') {
            let arr = operation[1].split('-')
            
            if (collection.includes(arr[0]))  {
                let myIndex = collection.indexOf(arr[0])
                collection.splice(myIndex + 1, 0, `${arr[0]}:${arr[1]}`)
            } else if (collection.includes(arr[1])){
                let myIndex = collection.indexOf(arr[1])
                collection.splice(myIndex + 1, 0, `${arr[1]}:${arr[0]}`)
            }
             
        }
            command = array[index++]


    }

    console.log(collection.join(' '));
}
tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)