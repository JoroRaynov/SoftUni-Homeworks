function login(arr){

let username = arr.shift();
let password = username.split('').reverse().join('')

for (let i = 0; i < arr.length; i++){
   if(arr[i] === password){
       console.log(`User ${username} logged in.`);
   } else {
       if(i == 3){
           console.log(`User ${username} blocked!`);
           break;
       }
           console.log(`Incorrect password. Try again.`);
       }
   }
}
    



login(['Acer','login','go','let me in','recA'])