function shoppingList(array) {

    let grocery = array.shift().split('!');

    while (array[0] !== 'Go Shopping!') {

        let tokens = array.shift().split(' ')
        let command = tokens[0];
        let item = tokens[1];

        if (command === 'Urgent') {
            if (!grocery.includes(item)) {
                grocery.unshift(item);
            }
        } else if (command === 'Unnecessary') {
            if (grocery.includes(item)) {
                let indexOfItem = grocery.indexOf(item);
                grocery.splice(indexOfItem, 1);
            }
        } else if (command === 'Correct') {
            let oldItem = item;
            let newItem = tokens[2];
            if (grocery.includes(oldItem)) {
                let indexOfOldItem = grocery.indexOf(oldItem);
                grocery.splice(indexOfOldItem, 1, newItem);
            }
        } else if (command === 'Rearrange') {
            if (grocery.includes(item)) {
                let indexOfItem = grocery.indexOf(item);
                let theRemovedItem = grocery.splice(indexOfItem, 1);
                grocery.push(theRemovedItem);
            }
        }

    }

    console.log(grocery.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Salt",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
