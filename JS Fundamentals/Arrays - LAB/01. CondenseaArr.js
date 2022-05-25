function reverse(nums) {


    let condensed = [];


    while (nums.length > 1) {

        condensed = [];

        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = nums[i] + nums[i + 1];
        }
        nums = condensed
    }
    console.log(nums.toString());
}
reverse([2, 10, 3])
