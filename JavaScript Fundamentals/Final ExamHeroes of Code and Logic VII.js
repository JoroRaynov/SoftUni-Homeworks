function heroesOfCodeAndLogic(input) {

    let totalHeroes = input.shift();
    let heroes = {};


    for (let i = 0; i < totalHeroes; i++) {
        let tokens = input.shift().split(' ');
        let [name, hp, mp] = tokens;
        hp = Number(hp);
        mp = Number(mp);
        heroes[name] = {
            hp,
            mp
        };
    }

    for (const line of input) {
        let tokens = line.split(' - ');
        let [command, name, p1, p2] = tokens;
        if (command === 'CastSpell') {
            let mana = Number(p1);
            let spellName = p2;
            if (heroes[name].mp >= mana) {
                heroes[name].mp -= mana;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let damage = Number(p1);
            let attacker = p2;
            heroes[name].hp -= damage;
            if (heroes[name].hp > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }
        } else if (command === 'Recharge') {
            let manaAmount = Number(p1);
            let charge = Number(Math.min(200 - (heroes[name].mp), manaAmount));
            heroes[name].mp += charge;
            console.log(`${name} recharged for ${charge} MP!`);
        } else if (command === 'Heal') {
            let healAmount = Number(p1);
            let charge = Number(Math.min(100 - (heroes[name].hp), healAmount));
            heroes[name].hp += charge;
            console.log(`${name} healed for ${charge} HP!`);
        }
    }
    for (const [name, condition] of Object.entries(heroes)) {
        console.log(name);
        console.log(`  HP: ${condition.hp}`);
        console.log(`  MP: ${condition.mp}`);
    }
}
heroesOfCodeAndLogic([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    
])
