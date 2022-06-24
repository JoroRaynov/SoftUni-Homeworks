function sortArray(nums, criteria) {
    if (criteria === 'asc') {
        nums.sort((a, b) => a - b)
    } else {
        nums.sort((a, b) => b - a)
    }

    return nums;

}
sortArray([14, 7, 17, 6, 8], 'desc')
