function theListOfsongs(listOfSongs) {

    class songs {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let arrSongs = [];
    let numberOfSongs = listOfSongs.shift();
    let typeList = listOfSongs.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = listOfSongs[i].split('_');
        let song = new songs(type, name, time);
        arrSongs.push(song);
    }
    if (typeList === 'all') {
        arrSongs.map((g) => console.log(g.name))
    } else {
        let filtered = arrSongs.filter((g) => g.type === typeList);

        filtered.map((g) => console.log(g.name))
    }
}
theListOfsongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
])