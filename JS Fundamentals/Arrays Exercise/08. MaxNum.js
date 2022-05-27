function maxNum(arr){
let line = [];


for (let i = 0; i < arr.length; i++) {

    let isBigger = true;
    for (let j = i + 1; j <= arr.length; j++) {
      if(arr[i] <= arr[j]){
        isBigger = false;
        break;
      }
    }
      if(isBigger){
        line.push(arr[i]);
   
    }

    
}
console.log(line.join(' '));

}
maxNum([41, 41, 34, 20])