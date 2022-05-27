function dungeonestDark(str) {

    let strSplitet = str[0].split("|")
    let health = 100;
    let coins = 0;

    for (let i = 0; i < strSplitet.length; i++) {
        let arr = strSplitet[i].split(' ');

        if (arr[0] == 'potion') {
            health += Number(arr[1]);

            if (health >= 100) {
                let diff = Math.abs(health - arr[1] - 100)
                health = 100;
                console.log(`You healed for ${diff} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${arr[1]} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            
        } else if (arr[0] == 'chest') {
            coins += Number(arr[1]);
            console.log(`You found ${arr[1]} coins.`);
        } else {
            health -= Number(arr[1]);
            if (health <= 0) {
                console.log(`You died! Killed by ${arr[0]}.`);
                console.log(`Best room: ${i+1}`);
                break;
            } else {
                console.log(`You slayed ${arr[0]}.`);
            }

        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])