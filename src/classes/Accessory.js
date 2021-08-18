const Item = require('./Item.js');

/*
 * You can probably see a pattern, this indeed creates Accessory objects.
 * Once again, there is nothing else to it.
 */

class Accessory extends Item {
    constructor(name, description, rarity, type, value) {
        super(name, description, rarity);
        this.benefit = { type: null, value: 0 };
        this.benefit["type"] = type;
        this.benefit["value"] = value;
    }

    inspect() {
        this["rarity"].colorText(this.name)
        this["rarity"].colorStat(this.benefit["type"], this.benefit["value"])
        console.log(this.desc)
        this["rarity"].colorTypeItem("Accessory")
    }
}

module.exports = Accessory;