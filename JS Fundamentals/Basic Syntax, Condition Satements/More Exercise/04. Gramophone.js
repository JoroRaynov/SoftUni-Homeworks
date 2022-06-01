function gramophone(band, album, song){

let songDuration = (album.length * band.length) * song.length / 2;

let rotation = Math.ceil(songDuration / 2.5)

console.log(`The plate was rotated ${rotation} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')