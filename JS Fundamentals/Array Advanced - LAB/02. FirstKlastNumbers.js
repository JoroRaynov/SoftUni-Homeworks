function firstLastKNumbers(nums){

let kNumber = nums.shift();

let result = nums.slice(0, kNumber).join(' ');

let result2 = nums.slice(-kNumber).join(' ');

console.log(result);

console.log(result2);

}
firstLastKNumbers([2, 7, 8, 9])