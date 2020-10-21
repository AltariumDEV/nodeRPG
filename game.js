/*
    NodeRPG - Main File (game.js)

    Created By: Altarias
    
    Description: The main file of the NodeRPG project, this is the file you are supposed to start to get the game working.

    Current Version: [ALPHA] 0.24_A
    Changelog:
        - Ordered more of the functions from the main file into subfiles for easier management. 
        - Added Menu Rendering Features (See rendering/menuRender.js for more info)
        - Put controls into a different file (See gamelogic/controls.js for more info)

*/


// Require readline to setup the raw input
const readline = require ('readline');
// Require things for the menu renderer
const mr = require ('./rendering/menuRender');
const mfa = require ('./rendering/menu_function_arrays');
const mls = require ('./rendering/multi_line_strings');
// Require things for the room renderer
const rr = require ('./rendering/roomRender');

// Setup Raw Inputs
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Current GameState
let currentState = "menu";

// Room Number
let roomNum = 0;

// Input Queue
let inQueue = [];

// Menu Specific Things
let main_menu = mr.createMenu(mls.menus.menu1);

// Room Specific Things
let room = rr.parseRoom(mls.dungeons.d1[roomNum]);
const player = rr.dynamicObjectMap.find(o => o.type === "player");
rr.setPlayerSpawn(room, player);

console.clear();
mr.preloadMenu(main_menu);
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else if (key.ctrl && key.name === 'z') {
        inQueue = [];
    } else {
        inQueue.push(key);
    }
    main_process(key);
});
// Interval for controls + queue
let nextKey;

function main_process(nextKey) {
    if (currentState === "menu") {
        nextKey = inQueue.pop();
        mr.processKey(nextKey, main_menu, mfa.main_menu);
    } else if (currentState === "game") {
        setInterval( () => {
            nextKey = inQueue.pop();
            if (nextKey === undefined) return;
            rr.processKey(nextKey, room);
        }, 75);
    }
}