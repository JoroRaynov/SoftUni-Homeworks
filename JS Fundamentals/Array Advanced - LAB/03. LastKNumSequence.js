function lastKNumSequence(n, k) {

    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let kElement = result.slice(-k)
        let sum = 0;

        for (const element of kElement) {
            sum += element;
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}
lastKNumSequence(6, 3);
lastKNumSequence(8, 2);