/*
 * The item class is the simplest class, it is used as a base for all other classes that have
 * to do with individual items. These would be Weapon, Armor, Accessory and SpecialAccesory
 * 
 * You shouldn't have to use this class, use the other classes instead.
 * If you need an extra class to code something more in, extend this class.
 *   
 */

class Item {
    constructor(name, description, rarity) {
        this.name = name;
        this.desc = description;
        this.rarity = rarity
    }

    inspect() {
        this["rarity"].colorText(this.name)
        console.log(this.desc)
        this["rarity"].colorTypeItem("Item")
    }
}

module.exports = Item;