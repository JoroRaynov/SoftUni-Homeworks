function passwprd(input){
     index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++
    let data = input[index];
    index++;

    while(data !== password){
        data = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);

}
passwprd(["Gosho",
"secret",
"secret"])

