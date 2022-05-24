function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        isPalindrome(arr[i])
    }

    function isPalindrome(number) {
        let splitet = number.toString().split('').reverse().join('')
        if (number == splitet) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121])