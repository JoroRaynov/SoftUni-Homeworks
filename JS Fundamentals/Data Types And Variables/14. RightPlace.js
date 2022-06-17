function rightPlace(string, char, word){

    let result = string.replace('_', char);

    if(result == word){
        console.log(`Matched`);
    }else {
        console.log(`Not Matched`);
    }

}
rightPlace('Str_ng', 'i', 'String')