class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    toString() {
        console.log(`name : ${this.name}\n cost : ${this.cost}\n power : ${this.power}\n resilience : ${this.resilience}`);
    }

    addAnEffect(effect) {
        this.cost -= effect['cost'];

        if (effect['stat'] == 'resilience') {


            if (effect['magnitude'].slice(0, 1) == '+') {

                this.resilience += parseInt(effect['magnitude'].slice(1, effect['magnitude'].length));
            }
            if (effect['magnitude'].slice(0, 1) == '-') {

                this.resilience -= parseInt(effect['magnitude'].slice(1, effect['magnitude'].length));
            }
        }
        if (effect['stat'] == 'power') {

            if (effect['magnitude'].slice(0, 1) == '+') {

                this.power += parseInt(effect['magnitude'].slice(1, effect['magnitude'].length));
            }
            if (effect['magnitude'].slice(0, 1) == '-') {

                this.power -= parseInt(effect['magnitude'].slice(1, effect['magnitude'].length));
            }
        }
    }
}
const Red_Belt_Ninja = new Unit("Red Belt Ninja", 10, 10, 11)
const Black_Belt_Ninja = new Unit("Black Belt Ninja", 11, 12, 11)


class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    toString() {
        console.log(`name : ${this.name}\n cost : ${this.cost}\n text : ${this.text}\n stat : ${this.stat}\n magnitude : ${this.magnitude}`);
    }
}
const Hard_Algorithm = new Effect("Hard Algorithm", 10, "increase target's resilience by 11", "resilience", "+10");

const Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection", 10, "reduce target's resilience by 12", "resilience", "-10");

const Pair_Programming = new Effect("Pair Programming", 13, "increase target's power by 12", "power", "+12");

