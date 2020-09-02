// Terminal Setup
var term = require('terminal-kit').terminal;


const assets = { 
    "w": "█",
    "p": "Θ",
    "g": " ",
    "t": "+",
}

var playerPos = [1, 1];

var room = [
    ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","t","g","w"],
    ["w","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","g","w"],
    ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]
];

function controlGame(playerPos, room) {
    var escPressed = false;
    while (escPressed === false) {
        term.grabInput(true);
        term.on( 'key', function( name, matches, data ) {
            if (key === "UP") {
                if (room[playerPos[0]][playerPos[1]+1] === "w") {
                    return;
                } else {
                    playerPos[1] = playerPos[1]+1;
                    renderRoom(room);
                }
            } else if (key === "DOWN") {
                if (room[playerPos[0]][playerPos[1]-1] === "w") {
                    return;
                } else {
                    playerPos[1] = playerPos[1]-1;
                    renderRoom(room);
                }   
            } else if (key === "LEFT") {
                if (room[playerPos[0]-1][playerPos[1]] === "w") {
                    return;
                } else {
                    playerPos[0] = playerPos[0]-1;
                    renderRoom(room);
                }   
            } else if (key === "RIGHT") {
                if (room[playerPos[0]+1][playerPos[1]] === "w") {
                    return;
                } else {
                    playerPos[0] = playerPos[0]+1;
                    renderRoom(room);
                }    
            } else if (key === "ESCAPE") {
                escPressed = true;
            } else {
                return;
            }
        });    
    }
}

function renderRoom(arr) {
    var roomSize = size(arr)
    var roomSizeX = roomSize[0];
    var roomSizeY = roomSize[1];
    room[playerPos[0]][playerPos[1]] = "p";
    var line = "";
    for(var i = 0; i < roomSizeX; i++) {
        for(var j = 0; j < roomSizeY; j++) {
            line += assets[room[i][j]];
        }
        term.bold(line + "\n");
        line = "";
    }
}

console.clear();
renderRoom(room);
controlGame(playerPos, room);

// Optional Functions
function size(arr){
    var row_count = arr.length;
    var row_sizes = []
    for(var i=0;i<row_count;i++){
        row_sizes.push(arr[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}