function filmRating(input){

    let movies = Number(input[0]);
    let index = 1;
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    let lowRatingMovie = '';
    let highestRatingMovie = '';
    let totalRating = 0;


    for(let i = 0; i < movies; i++){
        let nameMovie = input[index++];
        let rating = Number(input[index++]);
        totalRating += rating;
        if(rating > max){
            max = rating;
            highestRatingMovie = nameMovie;
        } else if(rating < min){
            min = rating;
            lowRatingMovie = nameMovie;
        }
    }
let averageRating = totalRating / movies;

console.log(`${highestRatingMovie} is with highest rating: ${max.toFixed(1)}`);
console.log(`${lowRatingMovie} is with lowest rating: ${min.toFixed(1)}`);
console.log(`Average rating: ${averageRating.toFixed(1)}`);

}
filmRating(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
