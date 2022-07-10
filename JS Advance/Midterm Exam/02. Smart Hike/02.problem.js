class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = Number(altitude);
        return `You have successfully added a new goal - ${peak}`
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike")
        }
        let difference = this.resources - time * 10;
        if (difference < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources = difference;
        this.listOfHikes.push({
            peak,
            time,
            difficultyLevel
        });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${time*10}% resources`
    }
    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }
        let hikes = [];
        if (criteria == 'hard') {
            for (const item of this.listOfHikes) {
                if (item.difficultyLevel == 'hard') {

                    hikes.push(item);
                }

            }
        } else if (criteria == 'easy') {
            for (const item of this.listOfHikes) {
                if (item.difficultyLevel == 'easy') {

                    hikes.push(item);
                }
            }
        } else if (criteria == 'all'){

            let result = ['All hiking records:'];
            result.push(this.listOfHikes.map(c => `${this.username} hiked ${c.peak} for ${c.time} hours`).join('\n'))

            return result.join('\n')

        }
        if (hikes.length == 0) {
           return `${this.username} has not done any ${criteria} hiking yet`
        } else if (hikes.length > 0){
            let shortTime = hikes.sort((a, b) => a.time - b.time);
            let peak = '';
            let time = 0;
            for (const item of shortTime) {
                peak = item.peak;
                time = item.time

            }
            return `${this.username}'s best ${criteria} hike is ${peak} peak, for ${time} hours`
        }
        

    }


}




const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));