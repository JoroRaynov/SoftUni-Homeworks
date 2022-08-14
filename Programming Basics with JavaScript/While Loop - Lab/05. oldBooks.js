function oldBooks(input){

    let favouriteBook = input[0];
    let index = 1;
    let currentBook = input[index];
    let counter = 0;

    while(currentBook !== 'No More Books'){
        counter++
        
        
        if(currentBook === favouriteBook){
            console.log(`You checked ${counter - 1} books and found it. `);
            break;
        }
        index++
        currentBook = input[index];
        
    } if(currentBook === 'No More Books'){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }

   

}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])
