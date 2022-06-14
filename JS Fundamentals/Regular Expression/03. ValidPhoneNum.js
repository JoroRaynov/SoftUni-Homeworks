function solve(numbers) {


    let regex = /\+359([ |-])2\1\d{3}\1\d{4}\b/g;
    let result = [];
    let valid = regex.exec(numbers);
  
console.log(valid);
    while (valid !== null) {
        result.push(valid[0]);
        valid = regex.exec(numbers)
    }
    console.log(result.join(', '));
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")