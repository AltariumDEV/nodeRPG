class Rarity {
    constructor(name, colorR, colorG, colorB) {
        this.name = name;
        this.color = `\x1b[38;2;${colorR};${colorG};${colorB}m`;
        this.resetter = "\x1b[0m"
    }

    colorText(text) {
        console.log(this.color + text + this.resetter + "\n")
    }

    colorStat(type, value) {
        console.log(type + ": " + this.color + "+" + value + this.resetter)
    }

    colorTypeItem(type) {
        console.log(this.color + this.name + " " + type + this.resetter + "\n")
    }
}

module.exports = Rarity