/*
 * The Player class houses all the functions that are connected to the player itself.
 * Basically, this class is a god object for player functions. It knows everything the player
 * has equipped, It knows everything the player is.
 * 
 * There might be a better way to implement this, like going through every element of the table.
 * Since this has individual rules for every stat, I cannot do that easily.
 * 
 */

class Player {
    constructor(name, pclass) {
        this.name = name;
        this.lvl = 0;
        this.xp = 0;
        this.playerClass = pclass
        this.equipment = { weapon: null, armor: null, accessory1: null, accessory2: null, accessory3: null }
        this.stats = { hp: 100, mp: 100, atk: 10, def: 10, agi: 10 }
    }

    updateStats() {
        // UPDATE: Player Class now sets base stats.
        if(this.playerClass != null) {
            this.stats["hp"] = this.playerClass["base"].health;
            this.stats["mp"] = this.playerClass["base"].mana;
            this.stats["atk"] = this.playerClass["base"].damage;
            this.stats["def"] = this.playerClass["base"].defense;
            this.stats["agi"] = this.playerClass["base"].speed; 
        }
        this.stats["hp"] = this.stats["hp"] + (this.lvl * 50); // 50 HP extra per level
        this.stats["mp"] = this.stats["mp"] + (this.lvl * 25); // 25 MP extra per level
        this.stats["atk"] = this.stats["atk"] + (this.lvl * 5) + this.equipment["weapon"].strength; // 5 extra ATK per level + the weapon's strength
        this.stats["def"] = this.stats["def"] + (this.lvl * 5) + this.equipment["armor"].defense; // 5 extra DEF per level + the armors defense
        this.stats["agi"] = this.stats["agi"] + (this.lvl * 2); // 2 extra AGI per level

        // check the accessory slots
        for (let i = 0; i < 3; i++) {
            const slot = "accessory" + i.toString();
            const checkBenefit = this.equipment[slot];

            if (checkBenefit != null) {
                // Benefit Value and benefit type
                const benefitType = checkBenefit.benefit["type"]
                const benefitValue = checkBenefit.benefit["value"]
                
                // Switch statement to check
                switch(checkBenefit.benefit["type"]) {
                    case "ATK":
                        this.stats["atk"] = this.stats["atk"] + benefitValue
                        break;
                    case "DEF":
                        this.stats["def"] = this.stats["def"] + benefitValue
                        break;
                    case "AGI":
                        this.stats["agi"] = this.stats["agi"] + benefitValue
                        break;
                    case "HP":
                        this.stats["hp"] = this.stats["hp"] + benefitValue
                        break;
                    case "MP":
                        this.stats["mp"] = this.stats["mp"] + benefitValue
                        break;
                    default:
                        break; // Any other case is unpredictable until it's programmed otherwise
                }
            }
        } 
    }

    changeXP(value) {
        this.xp = value
        if (levelUp()) {
            return print("LEVEL UP! You are now level ", this.lvl);
        }
    }

    addXP(value) {
        this.xp = this.xp + value
        if (levelUp()) {
            return print("LEVEL UP! You are now level ", this.lvl);
        }
    }

    levelUp() {
        if (this.xp >= (100 + (lvl * 20))) {
            this.lvl = this.lvl + 1;
            this.xp = 0;
            return true;
        } else {
            return false;
        } // this should lead to a level up when the XP is 100 + the level * 20 (which is 120 at lvl 1, 140 at lvl 2, etc.)
    }

    changeWeapon(weapon) {
        return this.equipment["weapon"] = weapon;
    }

    changeArmor(armor) {
        return this.equipment["armor"] = armor;
    }

    changeAccessory(accessory, slot) {
        const accessSlot = "accessory" + slot.toString();
        return this.equipment[accessSlot] = accessory;
    }
}

module.exports = Player;