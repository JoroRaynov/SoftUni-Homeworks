function solve(input) {

    let movies = [];

    for (const line of input) {
        let tokens = line.split(' ');
        let addIndex = tokens.indexOf('addMovie');
        let directorIndex = tokens.indexOf('directedBy');
        let dateIndex = tokens.indexOf('onDate');
        if (addIndex > -1) {
            let nameMovie = tokens.slice(addIndex + 1).join(' ');
            movies.push({
                name: nameMovie
            })
        }
        if (directorIndex > -1) {
            let nameMovie = tokens.slice(0, directorIndex).join(' ');
            let directorName = tokens.slice(directorIndex + 1).join(' ');
            movies.forEach(movie => {
                if (movie.name === nameMovie) {
                    movie.director = directorName;
                }
            });
        }
        if (dateIndex > -1) {
            let nameMovie = tokens.slice(0, dateIndex).join(' ')
            let date = tokens.slice(dateIndex + 1).join('')
            movies.forEach(movie => {
                if (movie.name === nameMovie) {
                    movie.date = date;
                }
            });
        }
    }
    movies.forEach(movie => {
        if (movie.name !== undefined && movie.date !== undefined && movie.director !== undefined) {


            console.log(JSON.stringify(movie));
        }
    })
}
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);