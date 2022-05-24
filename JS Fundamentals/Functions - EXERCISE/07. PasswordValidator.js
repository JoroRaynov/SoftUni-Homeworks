function passwordValidator(password) {

    
    function isLenghtEnough(passString) {
        return passString.length >= 6 && passString.length <= 10;
    }


    function isConsistLettersAndDigits(passString) {
        for (const item of passString) {
            let currChar = item.charCodeAt(0);

            if (
                !(currChar >= 48 && currChar <= 57) &&
                !(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122)) {
                return false;
            }

        }

        return true;
    }

    function isHaveTwoDigits(passString) {
        let counter = 0;
        for (const char of passString) {
            let currChar = char.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57)
                counter++
        }
        return counter >= 2;
    }
    let isOkLenght = isLenghtEnough(password);
    let isOKLetherAndDigits = isConsistLettersAndDigits(password);
    let isOkTwoDigits = isHaveTwoDigits(password);

    if (isOkLenght && isOKLetherAndDigits && isOkTwoDigits) {
        return console.log('Password is valid');
    }
    if (!isOkLenght) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (!isOKLetherAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (!isOkTwoDigits) {
        console.log('Password must have at least 2 digits');
    }
}
passwordValidator('Pa$s$s')