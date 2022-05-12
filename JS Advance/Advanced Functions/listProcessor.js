function processor(input) {

    let commands = (function () {
        let result = [];

        return {
            add(str) {
                result.push(str);
            },
            remove(str) {
                result = result.filter(x => x !== str);
            },
            print() {
                return console.log(result.join(','));
            }
        }
    })();
    for (const command of input) {
        let [cmndName, string] = command.split(' ');
        commands[cmndName](string)
    }
}
processor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])

// function processCommands(commands) {
//     let command = (function () {
//         let text = '';
//         return {
//             append: (t) => text = text + t,
//             removeStart: (count) => text = text.slice(count),
//             removeEnd: (count) => text = text.slice(0, text.length - count),
//             print: function () {
//                 console.log(text);
//             }
//         };
//     })();
//     for (let cmd of commands) {
//         let [cmdName, arg] = cmd.split(' ');
//         command[cmdName](arg);
//     }

// }