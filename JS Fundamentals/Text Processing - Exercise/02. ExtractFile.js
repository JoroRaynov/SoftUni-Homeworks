function solve(input){

    let myIndex = input.lastIndexOf('\\') +1;

    let tokens = input.substring(myIndex).split('.');
    let extension = tokens.pop();
    let fileName = tokens.join('.');
    console.log(`File name: ${fileName}`)
    console.log( `File extension: ${extension}`)


}
solve('C:\\Projects\\Data-Structures\\LinkedList.bak.cs')