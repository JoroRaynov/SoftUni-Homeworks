function sortArrayByTwoCriteria(array) {

 array.sort(function(a,b) {
 return a.length - b.length || a.localeCompare(b)
    });

    for (const item of array) {
        console.log(item);
    }
}
sortArrayByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default'
])