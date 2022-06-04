function numbers(nums) {

    let myNewArr = nums.slice().split(" ").map(Number);
    let sum = myNewArr.reduce((a, b) => a + b, 0);
    let averageNum = sum / myNewArr.length;
    let tempArr = [];
    let reduced = myNewArr.sort((a, b) => b - a).splice(0, 5)
    for (let i = 0; i < reduced.length; i++) {
        let currNum = reduced[i];
        if (currNum > averageNum) {
            tempArr.push(currNum)
        }
    }
    if(tempArr.length === 0) {
      return  console.log('No');
    }
    console.log(tempArr.join(' '));
}
numbers('1')