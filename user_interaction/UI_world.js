/*
    
    Project Name - Module: User Interface [WORLD]
    Date of Creation: 26.10.2020
    Creator: AltariasMainAccount
    Creator Contact: Altar#8020 (Discord)
    Modified by: - NaN -

    Description: 
        This file enables you to render an array that the end user can interact with

    Latest Update: 0.2 (Origin NodeRPG Alpha)
    
    Patch Notes:
    - Rendering of the world requires "Asset Modules" - assets/world_mls
    - Added 24-bit color support, working on compatibility mode (8-bit and 16-bit color support(Expect this to work in Update 0.8))
    
    This piece of code is provided as is, you are allowed to modify this piece of code as long as you do not use it for commercial gain.
    Please keep this multiline comment intact, as it contains details about how people can contact me incase something breaks. If you did
    any modifications you are allowed to write your own name under "Modified by: ".
    
    Thank you. <3

*/

/*
    Module Variables

    Location of Variables used within this module
*/

const exArr = require ('../modules/extended_array_functions');

// Declared Icon Maps
let iconMapping = { "w": "█", " ": " ", "d": "▒", "e": "■", "s": "@" }
let dynamicObjects = [
    {
        type: "player",
        icon: "δ",
        xpos: 1,
        ypos: 1,
    }
]

// Variables

let deltaX = 0; 
let deltaY = 0;
let room; 
let roomNum = 0;
let indexPlayer = dynamicObjects[0];

/*
    Module Start

    The Code of the Module starts here
*/

module.exports = {
    iconMap: iconMapping,
    dynamicObjectMap: dynamicObjects, 
    /*
        Generate Dungeon Function

        Generates a semi-functional dungeon from multiple multi-line string
    */
    generateDungeon: function(name, ...A_str) {
        // Current String
        let currentStr = 0;
        // Default Object
        let dungeon = {
            title: name,
            rooms: [],
        }
        A_str.forEach(x => {
            dungeon.rooms[currentStr] = generateRoom(x);
            currentStr++;
        });
        return dungeon;
    },
    /*
        Process Input Function
    
        Enables the player to interact with maps
    */
    processInput: function(x, obj) {
        let dungeon_current = obj;
        let end = false;
        // When the room is undefined, it will always go for the first room in the dungeon object and set it as the first default.
        if(room == undefined) {
            room = dungeon_current.rooms[0];
        }
        // If the playerspawn is at 1, 1, change it lol.
        if(indexPlayer.xpos == 1 && indexPlayer.ypos == 1) {
            setPlayerSpawn(room);
        }
        // Check if any of the keys that the user has pressed are valid input cases for "processInput"
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
        // Check the collisions of the map
        let checkCol = checkCollision(room, dungeon_current);
        // Render the map after collision has been checked
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

/*
    Render Map Function

    Renders the current array with slight edits
*/

function renderMap(arr) {
    // Setup Canvas (Backbuffer)
    let canvas = exArr.deepcopy(arr);
    console.clear();
    let roomSizeX, roomSizeY;
    [roomSizeX, roomSizeY] = exArr.size(arr);
    // Draw on Canvas
    // reverse iterator without array copying
    dynamicObjects.slice().reverse().forEach(obj => { canvas[obj.xpos][obj.ypos] = obj.icon; });
    // Render Canvas
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

/*
    Generate Room Function

    Makes an array from a multi-line string to be used as an array
*/

function generateRoom(str) {
    // Initialize empty variables
    let temp;
    let arr = [];
    // Create an array that will split the multi-line string by every NewLine (\n)
    let lines = str.split("\n");
    lines.shift();
    // Check the size of the given array and see what is the largest line of the array "lines"
    let arrY = lines.length;
    let arrX = Math.max(...lines.map(line => line.length));
    // Start splitting every line of the array into characters, making a 2D Array
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

/*
    Collision Check

    Allows the program to check if you are colliding with a given object.
    If so, it will execute the code given.
*/

function checkCollision(room, dungeon) {
    let isNextRoom = false;
    if(room == undefined) {
        room = dungeon.rooms[0];
    }
    let iPlayer = indexPlayer;
    // Continue
    if (room[iPlayer.xpos + deltaX][iPlayer.ypos + deltaY] === "w") {
        return;
    } else {
        iPlayer.xpos += deltaX;
        iPlayer.ypos += deltaY;
    }
    // Check for the Exit Point
    if (room[iPlayer.xpos][iPlayer.ypos] === "e") {
        isNextRoom = true;
    }
    // Reset the delta variables
    deltaX = 0; 
    deltaY = 0;
    return isNextRoom;
}

/*
    Set Player Spawn

    Sets the players spawn in the room to a certain position that is declared in the multiline string using "s"
*/

function setPlayerSpawn (arr) {
    let canvas = exArr.deepcopy(arr);
    let player = indexPlayer;
    let roomSizeX, roomSizeY;
    [roomSizeX, roomSizeY] = exArr.size(arr)
    for (var y = 0; y < roomSizeY; y++) {
        for (var x = 0; x < roomSizeX; x++) {
            if (canvas[x][y] === "s") { [player.xpos, player.ypos] = [x, y]; }
        }
    }
}