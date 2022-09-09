function movieDay(input){

    let timeFilming = Number(input[0]);
    let countScenes = Number(input[1]);
    let timeScene = Number(input[2]);

    let preparingTeren = timeFilming * 0.15;
    let timeRecScenes = countScenes * timeScene;
    let neededTime = preparingTeren + timeRecScenes;
    let diff = Math.round(Math.abs(neededTime - timeFilming));
   
    console.log(diff)
    if(neededTime > timeFilming){
        console.log(`Time is up! To complete the movie you need ${diff} minutes.`);
    } else {
        console.log(`You managed to finish the movie on time! You have ${diff} minutes left!`);

    }




}movieDay(["135",
"5",
"20"])

