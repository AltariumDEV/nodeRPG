// Require everything from all the folders lol
const classes = require('require-all')(__dirname + '/classes');

// Declare all ingame items here
const default_rarity = {
    common: new classes.Rarity("Common", 255, 255, 255),
    uncommon: new classes.Rarity("Uncommon", 153, 255, 51),
    rare: new classes.Rarity("Rare", 51, 102, 255),
    epic: new classes.Rarity("Epic", 153, 0, 255),
    legendary: new classes.Rarity("Legendary", 255, 204, 0),
    mythic: new classes.Rarity("Mythic", 255, 102, 255),
    pristine: new classes.Rarity("Pristine", 102, 255, 255),
    supreme: new classes.Rarity("Supreme", 255, 0, 0),
    unobtainable: new classes.Rarity("[!] Unobtainable", 0, 153, 153)
}

const default_armor = {
    leather_armor: new classes.Armor("Leather Armor", "Some worn down leather armor", default_rarity["common"], 5),
    chainmail_armor: new classes.Armor("Chainmail Armor", "Cool chains for a cool person", default_rarity["uncommon"], 15),
    plate_armor: new classes.Armor("Iron Plate Armor", "Iron plates are very good for defense", default_rarity["rare"], 30),
    hoodie: new classes.Armor("Hoodie", "Very comfy, yet not very good for defense", default_rarity["pristine"], 2),
    fox_ear_hoodie: new classes.Armor("Fox Ear Hoodie", "Very comfy, strangely powerful\nImbued with a strange presence.", default_rarity["unobtainable"], 42)
}

const default_weapon = {
    stick: new classes.Weapon("Stick", "It's a stick.", default_rarity["common"], 2, 5),
    sharp_stick: new classes.Weapon("Sharp Stick", "It's a sharp stick.", default_rarity["uncommon"], 5, 10),
    glass_shard: new classes.Weapon("Glass Shard", "Sharp glass, do not touch the pointy end.", default_rarity["epic"], 15, 20),
    glass_shiv: new classes.Weapon("Glass Shiv", "You have harnessed the power of the glass shard.", default_rarity["legendary"], 30, 30),
    sacred_sword_1: new classes.Weapon("Sword of Perendination", "Due tomorrow,\ndo tomorrow!", default_rarity["unobtainable"], 60, 40)
}

const default_accessory = {
    coin: new classes.Accessory("Coin", "A regular coin.", default_rarity["uncommon"], "AGI", 100),
    shiny_coin: new classes.Accessory("Shiny Coin", "A regular coin, but shiny!", default_rarity["epic"], "AGI", 250),
    hex_coin: new classes.Accessory("Hexagon-Shaped Coin", "Hexagon is the bestagon.", default_rarity["mythic"], "AGI", 500)
}

const default_class = {
    robber: new classes.PlayerClass("Robber", 40, 10, 30, 200, 50),
    paladin: new classes.PlayerClass("Paladin", 10, 40, 10, 300, 200),
    nerd: new classes.PlayerClass("Nerd", 30, 20, 10, 500, 350)
}

const default_player = new classes.Player("DEFAULT", default_class["paladin"]);

// Export everything
module.exports = { 
    default_rarity,
    default_accessory,
    default_armor,
    default_class,
    default_player,
    default_weapon,
}