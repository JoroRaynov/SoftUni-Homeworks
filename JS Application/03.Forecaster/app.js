function attachEvents() {
    let locationInput = document.getElementById('location');
    let getWeatherBtn = document.getElementById('submit');

    let divCurrentWeather = document.getElementById('current');
    let threeDayWeather = document.getElementById('upcoming');
    let divForecast = document.getElementById('forecast');

    let conditions = {
        Sunny: '☀',
        'Partly sunny': '⛅',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°'
    };

    console.log(divCurrentWeather);

    getWeatherBtn.addEventListener('click', () => {

        Array.from(divCurrentWeather.children).forEach((x, i) => {
            if (i > 0) {
                x.remove();
            }
          
        });

        Array.from(threeDayWeather.children).forEach((x, i) => {
            if (i > 0) {
                x.remove();
            }
        });
        let location = locationInput.value;
        locationInput.value = '';

        let url = 'http://localhost:3030/jsonstore/forecaster/locations';
        divForecast.style.display = 'block'
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    let div = document.createElement('div');
                    
                    div.textContent = 'Error'
                    divCurrentWeather.appendChild(div);
                    return
                }
                return res.json()
            })
            .then(data => {
                let name = data.find(d => d.name === location);
                if (!name) {
                    let p = document.createElement('div');
                    
                    p.textContent = 'Error'
                    divCurrentWeather.appendChild(p);
                    return
                }
                let todayUrl = `http://localhost:3030/jsonstore/forecaster/today/${name.code}`

                fetch(todayUrl)
                    .then(res => res.json())
                    .then(data => {
                        let condition = data.forecast.condition;

                        let divForecasts = document.createElement('div');
                        divForecasts.classList.add('forecasts');


                        let spanConditionSymbol = document.createElement('span');
                        spanConditionSymbol.className = 'condition symbol'
                        spanConditionSymbol.textContent = `${conditions[condition]}`;
                        // SPAN CONDITIONS - APPEND ALL SPAN
                        let spanCondition = document.createElement('span');
                        spanCondition.classList.add('condition');

                        let spanCityName = document.createElement('span');
                        spanCityName.classList.add('forecast-data');
                        spanCityName.textContent = `${data.name}`;

                        let spanDegrees = document.createElement('span');
                        spanDegrees.classList.add('forecast-data');
                        spanDegrees.textContent = `${data.forecast.low}${conditions.Degrees}/${data.forecast.high}${conditions.Degrees}`

                        let spanCond = document.createElement('span');
                        spanCond.textContent = `${data.forecast.condition}`
                        spanCond.classList.add('forecast-data');


                        divForecasts.appendChild(spanConditionSymbol);
                        spanCondition.appendChild(spanCityName)
                        spanCondition.appendChild(spanDegrees)
                        spanCondition.appendChild(spanCond);

                        divForecasts.appendChild(spanCondition)

                        divCurrentWeather.appendChild(divForecasts);
                        // divCurrentWeather.appendChild(spanCondition);

                        let threeDaysUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${name.code}`

                        fetch(threeDaysUrl)
                            .then(res => res.json())
                            .then(data => {

                                let divForecastInfo = document.createElement('div');
                                divForecastInfo.classList.add('forecast-info');

                                let spanUpcomingFirst = document.createElement('span');
                                spanUpcomingFirst.classList.add('upcoming');

                                let spanSymbolFirst = document.createElement('span');
                                spanSymbolFirst.classList.add('symbol');
                                let symbol = data.forecast[0].condition;

                                spanSymbolFirst.textContent = `${conditions[symbol]}`;

                                let spanDegrees = document.createElement('span');
                                spanDegrees.classList.add('forecast-data');
                                let low = data.forecast[0].low;
                                let high = data.forecast[0].high;
                                spanDegrees.textContent = `${low}${conditions.Degrees}/${high}${conditions.Degrees}`;

                                let spanCondFirst = document.createElement('span');
                                spanCondFirst.classList.add('forecast-data');
                                spanCondFirst.textContent = `${data.forecast[0].condition}`


                                spanUpcomingFirst.appendChild(spanSymbolFirst);
                                spanUpcomingFirst.appendChild(spanDegrees);
                                spanUpcomingFirst.appendChild(spanCondFirst);

                                /////////
                                let spanUpcomingSecond = document.createElement('span');
                                spanUpcomingSecond.classList.add('upcoming');

                                let spanSymbolSecond = document.createElement('span');
                                spanSymbolSecond.classList.add('symbol');
                                let symbolSecond = data.forecast[1].condition;

                                spanSymbolSecond.textContent = `${conditions[symbolSecond]}`;

                                let spanDegreesSecond = document.createElement('span');
                                spanDegreesSecond.classList.add('forecast-data');
                                let lowSecond = data.forecast[1].low;
                                let highSecond = data.forecast[1].high;
                                spanDegrees.textContent = `${lowSecond}${conditions.Degrees}/${highSecond}${conditions.Degrees}`;

                                let spanCondSecond = document.createElement('span');
                                spanCondSecond.classList.add('forecast-data');
                                spanCondSecond.textContent = `${data.forecast[1].condition}`

                                spanUpcomingSecond.appendChild(spanSymbolSecond);
                                spanUpcomingSecond.appendChild(spanDegreesSecond);
                                spanUpcomingSecond.appendChild(spanCondSecond);

                                /////////////////////
                                let spanUpcomingThird = document.createElement('span');
                                spanUpcomingThird.classList.add('upcoming');

                                let spanSymbolThird = document.createElement('span');
                                spanSymbolThird.classList.add('symbol');
                                let symbolThird = data.forecast[2].condition;

                                spanSymbolThird.textContent = `${conditions[symbolThird]}`;

                                let spanDegreesThird = document.createElement('span');
                                spanDegreesThird.classList.add('forecast-data');
                                let lowThird = data.forecast[2].low;
                                let highThird = data.forecast[2].high;
                                spanDegreesThird.textContent = `${lowThird}${conditions.Degrees}/${highThird}${conditions.Degrees}`;

                                let spanCondThird = document.createElement('span');
                                spanCondThird.classList.add('forecast-data');
                                spanCondThird.textContent = `${data.forecast[2].condition}`

                                spanUpcomingThird.appendChild(spanSymbolThird);
                                spanUpcomingThird.appendChild(spanDegreesThird);
                                spanUpcomingThird.appendChild(spanCondThird);


                                divForecastInfo.appendChild(spanUpcomingFirst);
                                divForecastInfo.appendChild(spanUpcomingSecond);
                                divForecastInfo.appendChild(spanUpcomingThird);


                                threeDayWeather.appendChild(divForecastInfo);
                            })
                    });
            })
    });

}

attachEvents();