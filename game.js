// Asset File
const asset = require('./poc.js');

// Terminal Setup
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Assets
const assets = {
    "w": "█",
    "p": "Θ",
    " ": " ",
    "k": "+",
    "t": "X",
    
}

// Input Queue
let inQueue = [];
// Player Position
let playerPos = [1, 1];
let lastPos = playerPos;
// Room Variables
let room = [];
room = asset.parseRoom(asset.room1);

// The Logic Behind the Movement 
console.clear();
renderRoom(room);
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
    // Set variables for 
    let key = inQueue.pop();
    if (key === undefined) return;
    lastPos = playerPos.slice();
    let deltaX = 0;
    let deltaY = 0;
    if (key.name === 'w') {
        deltaY = -1;
    } else if (key.name === 'a') {
        deltaX = -1;
    } else if (key.name === 's') {
        deltaY = 1
    } else if (key.name === 'd') {
        deltaX = 1;
    }
    if (room[playerPos[0] + deltaX][playerPos[1] + deltaY] === "w") {
        return;
    } else {
        playerPos[0] += deltaX;
        playerPos[1] += deltaY;
    }
    renderRoom(room);
}, 150);

// Optional Functions
function renderRoom(arr) {
    console.clear();
    var roomSize = size(arr)
    var roomSizeX = roomSize[0];
    var roomSizeY = roomSize[1];
    room[lastPos[0]][lastPos[1]] = " ";
    room[playerPos[0]][playerPos[1]] = "p";
    var line = "";
    for (var y = 0; y < roomSizeY; y++) {
        for (var x = 0; x < roomSizeX; x++) {
            line += assets[room[x][y]];
        }
        console.log(line);
        line = "";
    }
    console.log("Current Position: " + playerPos);
    console.log("Last Position: " + lastPos);
}

function size(arr) {
    var row_count = arr.length;
    var row_sizes = []
    for (var i = 0; i < row_count; i++) {
        row_sizes.push(arr[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}