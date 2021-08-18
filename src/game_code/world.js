/*
    Rework of the World Renderer

    For Later - xoxo Altarium <3
*/

// Declared Icon Maps
let iconMapping = { 
    "w": "█", 
    " ": " ", 
    "d": "▒", 
    "e": "■", 
    "s": "@" 
}

let dynamicObjects = [
    {
        type: "player",
        icon: "δ",
        xpos: 1,
        ypos: 1,
    }
]

let deltaX = 0; 
let deltaY = 0;
let room; 
let roomNum = 0;
let indexPlayer = dynamicObjects[0];

module.exports = {
    iconMap: iconMapping,
    dynamicObjectMap: dynamicObjects, 

    generateDungeon: function(name, ...A_str) {
        let currentStr = 0;
        let dungeon = { title: name, rooms: [] }
        A_str.forEach(x => {
            dungeon.rooms[currentStr] = generateRoom(x);
            currentStr++;
        });
        return dungeon;
    },

    processInput: function(x, obj) {
        let dungeon_current = obj;
        let end = false;

        if(room == undefined) { room = dungeon_current.rooms[0]; }
        if(indexPlayer.xpos == 1 && indexPlayer.ypos == 1) { setPlayerSpawn(room); }

        switch(x.name) {
            case 'w':
                deltaY = -1;
                break;
            case 'a':
                deltaX = -1;
                break;
            case 's':
                deltaY = 1;
                break;
            case 'd':
                deltaX = 1;
                break;
        }

        let checkCol = checkCollision(room, dungeon_current);
        if(checkCol == true) {
            roomNum = roomNum + 1;
            if(roomNum > dungeon_current.rooms.length - 1) {
                console.log("There is no more content in this dungeon. [BETA END]")
                end = true;
            } else {
                room = dungeon_current.rooms[roomNum];
                setPlayerSpawn(room);
            }
        }    
        if(end == true) {
            console.log("Beta Test exited with error code 0.")
            process.exit(0);
        } else {
            renderMap(room);
        }
    },
    preRenderMap: function(dungeon) {
        room = dungeon.rooms[0];
        renderMap(room);
    }
}

function renderMap(arr) {
    let canvas = exArr.deepcopy(arr);
    console.clear();
    let roomSizeX, roomSizeY;
    [roomSizeX, roomSizeY] = exArr.size(arr);

    dynamicObjects.slice().reverse().forEach(obj => { canvas[obj.xpos][obj.ypos] = obj.icon; });

    var line = "";
    for (var y = 0; y < roomSizeY; y++) {
        for (var x = 0; x < roomSizeX; x++) {
            if (iconMapping[canvas[x][y]] === undefined) { line += canvas[x][y]; } 
            else { line += iconMapping[canvas[x][y]]; }
        }
        console.log(line);
        line = "";
    }
    console.log("Current Position: ", indexPlayer.xpos, indexPlayer.ypos, " in Room: ", roomNum);
}

function generateRoom(str) {
    let temp;
    let arr = [];
    let lines = str.split("\n");
    lines.shift();

    let arrY = lines.length;
    let arrX = Math.max(...lines.map(line => line.length));

    for (let x = 0; x < arrX; x++) {
        arr.push([]);
        for (let y = 0; y < arrY; y++) {
            temp = Array.from(lines[y]);
            arr[x].push(temp[x]);
            if (arr[x][y] === undefined) arr[x][y] = " ";
        }
    }
    return arr
}

function checkCollision(room, dungeon) {
    if(room == undefined) { room = dungeon.rooms[0]; }
    if (room[indexPlayer.xpos + deltaX][indexPlayer.ypos + deltaY] === "w") {
        return;
    } else {
        indexPlayer.xpos += deltaX;
        indexPlayer.ypos += deltaY;
    }
    deltaX = deltaY = 0;
    if (room[indexPlayer.xpos][indexPlayer.ypos] === "e") { return true } else { return false }
}

function setPlayerSpawn (arr) {
    let canvas = deepcopy(arr);
    let roomSizeX, roomSizeY;
    [roomSizeX, roomSizeY] = size(arr)
    for (var y = 0; y < roomSizeY; y++) {
        for (var x = 0; x < roomSizeX; x++) {
            if (canvas[x][y] === "s") { [indexPlayer.xpos, indexPlayer.ypos] = [x, y]; }
        }
    }
}

function size(arr) {
    var row_count = arr.length;
    var row_sizes = []
    for (var i = 0; i < row_count; i++) { row_sizes.push(arr[i].length) }
    return [row_count, Math.min.apply(null, row_sizes)]
}

function deepcopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}