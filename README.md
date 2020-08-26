# nodeRPG
## Description

NodeRPG is a terminal based roleplaying game developed by [AltariasMainAccount](https://github.com/AltariasMainAccount) on github. It is written in node.js *(duh)*

## Feature List
### Dungeons

The "dungeons" system is one of the main aspects of the game as it is basically all that the game has to offer.

It is gonna work as follows:

- The player selects a dungeon that they want to attempt to go through (These all have different level caps)
- If the level cap is achieved and the dungeon is selected, the player will enter the dungeon
- The dungeon consists of different floors (Which are the same on every difficulty), and different rooms (These change with difficulty)
- You are gonna move through the dungeon using an input system (like 1 or fwd = Move Forward)
- Every time you enter a new room, a RNG will decide if you get a fight, if you get any loot or if you just get nothing.
- At the end of these dungeons you have to fight the **Dungeon Boss**.

### Dungeon Boss

At the end of every dungeon, be it the first or the final dungeon, you will encounter a boss. This boss is usually indicated in the **description of the dungeon**.
*None of the bosses are currently invented and that might take a while.*

### Shop System

The **shop system** is another big part of the game as you can get common and uncommon items there. There is gonna be different shops for weapons, armor, accessories and other various items.
You get money from monsters, loot or bosses.

### Inventory

The **inventory system** is also a big part of the game, *you can combine items to make other items, look at your inventory or use items from the inventory.*
The ***exact*** specifics of this system are still unknown, however these are the features that you can expect to play a major role in the game.

### Rarity System (also known as "Item Tiers")

Every item that you get will have a rarity attached to it, which will be indicated by it's color.
Here is a rough overview of what to expect:

- **Common items** are white, there is nothing special about them. 
- **Uncommon items** are green, they tend to have better stats than common items.
- **Rare items** are dark blue, they are usually pretty good overall and usually have a neat stat bonus attached.
- **Very rare items** are cyan, they are pretty good and have a greatly increased reward for equipping them.
- **Epic items** are purple, they are the same as very rare items but they have a better stat boost
- **Legendary items** are orange, they are almost the best items statwise and give huge boosts to player stats
- **Mythic items** are magenta, they are the best items in the game and give the greatest player stat boosts.

As you might expect all of these rarities have specified drop chances from "**Almost guarranteed (~95%)**" to "**Pray to RNGsus (below 1%)**"

## Known Issues
### The "Standalone Lua" Issue

- The original projects was written in Lua (which is very limited in what it can do, even if the language that it is based on does not lack these features)
- A major problem that was caused because of the Limitations of the old environment is frustrations caused by simple features that were simply missing from Lua
- Many Parts of the code were just plain ugly and only existed for the purpose of simply working. This caused further problems with debugging

Moral of the story: Do not use a scripting language as a Standalone Environment