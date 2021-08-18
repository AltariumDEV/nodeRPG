const Item = require('./Item.js');

/*
 * The weapon class is able to create a weapon object.
 * Yes, that's about it for the Weapon class.
 * No, seriously. That's it.
 *  
 * The Damage Calculation is based on Hypixel Skyblock
 * TODO: Add Damage Calculation, Formula (5 + WeaponDMG) * (1 + PlayerATK / 100) 
 * 
 */

class Weapon extends Item {
    constructor(name, description, rarity, dmg, strength) {
        super(name, description, rarity);
        this.damage = dmg;
        this.strength = strength
    }

    inspect() {
        this["rarity"].colorText(this.name)
        this["rarity"].colorStat("Damage", this.damage)
        this["rarity"].colorStat("Strength", this.strength)
        console.log(this.desc)
        this["rarity"].colorTypeItem("Weapon")
    }
}

module.exports = Weapon;