class Enemy {
    constructor(name, hp, atk, def, agi) {
        this.name = name;
        this.health = hp;
        this.strength = atk;
        this.defense = def;
        this.speed = agi;
    }
}

module.exports = Enemy;