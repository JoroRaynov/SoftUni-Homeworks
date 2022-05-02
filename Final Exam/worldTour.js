function worldTour(input) {

    let stops = input.shift();

    while (input[0] !== 'Travel') {

        let tokens = input.shift().split(':');
        let command = tokens[0];
        if (command === 'Add Stop') {
            AddStop(tokens);

        } else if (command === 'Remove Stop') {
            removeStop(tokens);
        } else if (command === 'Switch') {
            Switch(tokens);
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function Switch(tokens) {
        let oldStr = tokens[1];
        let newStr = tokens[2];
        if (stops.includes(oldStr)) {
            let pattern = new RegExp(oldStr, 'g');
            stops = stops.replace(pattern, newStr);
            console.log(stops);
        } else {
            console.log(stops);
        }
    }

    function removeStop(tokens) {
        let startIndex = Number(tokens[1]);
        let stopIndex = Number(tokens[2]);
        if (startIndex >= 0 && startIndex < stops.length && stopIndex >= 0 && stopIndex < stops.length) {
            let leftSide = stops.slice(0, startIndex);
            let rightSide = stops.slice(stopIndex + 1);
            stops = leftSide + rightSide;
            console.log(stops);
        } else {
            console.log(stops);
        }
    }

    function AddStop(tokens) {
        let index = tokens[1];
        let replace = tokens[2];
        if (index >= 0 && index < stops.length) {
            let leftSide = stops.slice(0, index);
            let rightSide = stops.slice(index);
            stops = leftSide + replace + rightSide;
            console.log(stops);
        } else {
            console.log(stops);
        }
    }
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"
])