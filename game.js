/**
 * rparser - game functions
 * tclog - true color log
 * menu - menu stuff
 */
const rparser = require('./gamelogic/roomParser.js');
const tclog = require('./modules/true_color.js');
const menu = require("./gamelogic/menuParsing.js");
/** 
 * Terminal Setup
 * Making Sure Raw Input is enabled
 */ 
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let currentState = "menu";

/**
 * Variables for the game itself.
 */
// Input Queue
let inQueue = [];
// Room Variables
let roomNum = 0;
let room = rparser.parseRoom(rparser.r[roomNum]);
const player = rparser.dynamicObjects.find(o => o.type === "player");
let deltaX = 0;
let deltaY = 0;
setPlayerSpawn();

// The Logic Behind the Movement 

/**
 * Controls of the game/menu go here
 * Do not mix this up.
 */

// Setup Terminal for input
console.clear();
if (currentState === "game") {
    renderRoom();
} else if (currentState === "menu") {
    menu.renderMenu();
}
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else if (key.ctrl && key.name === 'z') {
        inQueue = [];
    } else {
        inQueue.push(key);
    }
});
// Interval for controls + queue
setInterval( () => {
    let key = inQueue.pop();
    if (key === undefined) return;
    if (currentState === "menu") {
        if (key.name === "up" && (!menuSelected === "0")) {
            
        } else if (key.name === "down" && (!menuSelected === "4")) {
            
        } else if (key.name === "return") {
            
        }
    } else if (currentState === "game") {
        // Set variables for 
        if (key.name === 'w') {
            deltaY = -1;
        } else if (key.name === 'a') {
            deltaX = -1;
        } else if (key.name === 's') {
            deltaY = 1
        } else if (key.name === 'd') {
            deltaX = 1;
        }
        if (room[player.xpos + deltaX][player.ypos + deltaY] === "w") {
            return;
        } else {
            player.xpos += deltaX;
            player.ypos += deltaY;
        }
        // TODO: check for keys, buttons, bombs, interactables, etc
        if (room[player.xpos][player.ypos] === "e") {
            roomNum = roomNum + 1;
            room = rparser.parseRoom(rparser.r[roomNum]);
            setPlayerSpawn();
        }
        renderRoom();
    }
}, 75);

// Functionality
function setPlayerSpawn() {
    let canvas = deepcopy(room);
    let roomSizeX, roomSizeY;
    [roomSizeX, roomSizeY] = size(room)
    for (var y = 0; y < roomSizeY; y++) {
        for (var x = 0; x < roomSizeX; x++) {
            if (canvas[x][y] === "s") {
                [player.xpos, player.ypos] = [x, y];
            }
        }
    }    
}


function renderRoom() {
    // Setup Canvas (Backbuffer)
    let canvas = deepcopy(room);
    console.clear();
    let roomSizeX, roomSizeY;
    [roomSizeX, roomSizeY] = size(room)    
    // Draw on Canvas
    // reverse iterator without array copying
    rparser.dynamicObjects.slice().reverse().forEach(obj => {
        canvas[obj.xpos][obj.ypos] = obj.icon
    });
    // Render Canvas
    var line = "";
    for (var y = 0; y < roomSizeY; y++) {
        for (var x = 0; x < roomSizeX; x++) {
            if (rparser.iconMapping[canvas[x][y]] === undefined) {
                line += canvas[x][y];
            } else {
                line += rparser.iconMapping[canvas[x][y]];
            }
        }
        console.log(line);
        line = "";
    }
    console.log("Current Position: ", player.xpos, player.ypos, " in Room: ", roomNum);
}

function size(arr) {
    var row_count = arr.length;
    var row_sizes = []
    for (var i = 0; i < row_count; i++) {
        row_sizes.push(arr[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}