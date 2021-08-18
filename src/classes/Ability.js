class Ability {
    constructor(name, description) {
        this.name = name
        this.description = description
    }

    getAbility() {
        console.log("\x1b[38;2;255;153;0mAbility: " + this.name + "\x1b[0m")
        console.log(this.description);
    }
}