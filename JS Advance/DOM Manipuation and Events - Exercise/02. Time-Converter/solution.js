function attachEventsListeners() {
    let daysElement = document.getElementById('days');
    let hoursElement = document.getElementById('hours');
    let minutesElement = document.getElementById('minutes');
    let secondsElement = document.getElementById('seconds');

    let unit = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, id) {

        let days = value / unit[id];

        return {
            days: days,
            hours: days * unit.hours,
            minutes: days * unit.minutes,
            seconds: days * unit.seconds
        }
    }
    document.getElementById('daysBtn').addEventListener('click', onClick);
    document.getElementById('hoursBtn').addEventListener('click', onClick);
    document.getElementById('minutesBtn').addEventListener('click', onClick);
    document.getElementById('secondsBtn').addEventListener('click', onClick);

    function onClick(e) {
        
        let input = e.target.parentNode.querySelector('input[type="text"]');
        let result = convert(Number(input.value), input.id);

        daysElement.value = result.days;
        hoursElement.value = result.hours;
        minutesElement.value = result.minutes;
        secondsElement.value = result.seconds;
    }
}