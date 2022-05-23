function charactersInRange(charOne, charTwo) {

    let start = charOne.charCodeAt(0)
    let end = charTwo.charCodeAt(0);
    let arr = [];

if(start > end){
    start = charTwo.charCodeAt(0);
    end = charOne.charCodeAt(0)
}
    for (let i = start +1; i < end; i++) {

        arr.push(String.fromCharCode(i));
    }
    console.log(arr.join(' '));
  

}
charactersInRange('C', '#');