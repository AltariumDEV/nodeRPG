/*
 * This class is used to define the boost the player gets at the beginning of the game.
 * It has a base damage, base speed and base defense. I am planning on adding base HP and base MP
 * too.
 * 
 * This class will only affect the stats that you start with, it won't give you anything special (yet)
 * and it will not affect the gameplay as a whole.
 * 
 */

class PlayerClass {
    constructor(name, base_dmg, base_def, base_agi, base_hp, base_mp) {
        this.name = name;
        this.base = { damage: null, defense: null, speed: null, health: null, mana: null }
        this.base["damage"] = base_dmg;
        this.base["defense"] = base_def;
        this.base["speed"] = base_agi;
        this.base["health"] = base_hp;
        this.base["mana"] = base_mp;
    }
}

module.exports = PlayerClass;