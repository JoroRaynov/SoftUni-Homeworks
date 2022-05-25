function condenseArrayToNumber(nums) {
  
    let condensed = [];
    let boolian = false;

    if (nums.length == 1) {
            console.log(nums[0]);
    } else {
        while (nums.length > 1) {
            boolian = true;
            condensed = [];
            for (let i = 0; i < nums.length - 1; i++) {
                condensed[i] = nums[i] + nums[i + 1];
        }
            nums = condensed
        }
    }

    if (boolian) {
        console.log(condensed[0]);
    }
}

condenseArrayToNumber([5, 0, 4, 1, 2]);