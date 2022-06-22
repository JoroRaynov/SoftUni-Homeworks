function test() {
    let counter = 0;

    function count(value) {
        counter += value;
    }

    return {
       minus: function() {
            counter -= 1;
        },
        add() {
            counter += 1;
        },
        result() {
            return counter
        }

    }
}
let myFunc = test();

myFunc.minus(1)
myFunc.minus(1)
console.log(myFunc.result())