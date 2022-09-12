function seriesCalculator(input){

    let nameSerial = input[0];
    let countSeasons = Number(input[1]);
    let countEpisodes = Number(input[2]);
    let timeEpisodeNoAds = Number(input[3]);

    let timeForAds = timeEpisodeNoAds * 0.2;
    let timeEpisodeWithAds = timeEpisodeNoAds + timeForAds;
    let timeSpecEpisodes = countSeasons * 10;
    let totalTimeForWatching = Math.floor(timeEpisodeWithAds * countEpisodes * countSeasons +timeSpecEpisodes );

    console.log(`Total time needed to watch the ${nameSerial} series is ${totalTimeForWatching} minutes.`);


}
seriesCalculator(["Riverdale",
"3",
"21",
"45"])

