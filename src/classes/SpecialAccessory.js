const Accessory = require('./Accessory.js');

/*
 * // NOT FULLY IMPLEMENTED, DO NOT USE. //
 * 
 * Special Accessories are accessories that do not change stats, but rather do something
 * within the game, like giving access to a new level or giving more drop luck.
 *  
 * These *can* still change stats because they are an extension of the Accessory class.
 * 
 * // NOT FULLY IMPLEMENTED, DO NOT USE. //
 * 
 */


class SpecialAccessory extends Accessory {
    constructor(name, description, rarity, type, value, exec) {
        super(name, description, rarity, type, value);
        this.executeSpecial = exec; // This will be a function, you construct special accessories with individual functions that do certain things in certain cases (like after battle)
    }
}

module.exports = SpecialAccessory; 