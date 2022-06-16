function solve(array) {

    let text = array[0];
    let words = array[1];
    let result = '';

    for (const char of text) {
        if (char === '_') {
            result += char;
        } else if (char !== '_' && result.includes('_')) {
            for (const word of words) {
                if (result.length === word.length) {
                    text = text.replace(result, word);
                    result = '';
                    break
                }
            }
        }
    }
    console.log(text)
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
])