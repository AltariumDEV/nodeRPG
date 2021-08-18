const Item = require('./Item.js');

/*
 * The armor class is able to create an armor object.
 * Yes, that's about it for the Armor class, underwhelmingly.
 * No. That's it. There's nothing else.
 *  
 * Defense will lessen the effect of an attack.
 * Formula that could be used for damage reduction (Credits: Hypixel Skyblock): Def / (Def+100)
 * 
 */

class Armor extends Item {
    constructor(name, description, rarity, def) {
        super(name, description, rarity);
        this.defense = def;
    }

    inspect() {
        this["rarity"].colorText(this.name)
        this["rarity"].colorStat("Defense", this.defense)
        console.log(this.desc)
        this["rarity"].colorTypeItem("Armor")
    }
}

module.exports = Armor;