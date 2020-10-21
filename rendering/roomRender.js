let exArr = require ('../modules/exArr.js');

// Room Variables
let roomNum = 0;
let deltaX, deltaY = 0;

let iconMapping = {
    "w": "█",
    " ": " ",
    "d": "▒",
    "e": "■",
    "s": "@",
}
let dynamicObjects = [
    {
        "type": "player",
        "icon": "δ",
        "xpos": 1,
        "ypos": 1,
    },
    {
        "type": "key",
        "icon": "f",
        "xpos": 0,
        "ypos": 0,
    },
    {
        "type": "treasure",
        "icon": "M",
        "xpos": 0,
        "ypos": 0,
    },
]

module.exports = {
    iconMap: iconMapping,
    dynamicObjectMap: dynamicObjects, 
    processKey: function(x, rArr) {
        rRoom = rArr;
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
        if (rRoom[player.xpos + deltaX][player.ypos + deltaY] === "w") {
            return;
        } else {
            player.xpos += deltaX;
            player.ypos += deltaY;
        }
        if (rRoom[player.xpos][player.ypos] === "e") {
            roomNum = roomNum + 1;
            rRoom = parseRoom(mls.dungeon.d1[roomNum]);
            setPlayerSpawn(rRoom);
        }
        rr.renderRoom(rRoom);
    },
    setPlayerSpawn: function(arr, player) {
        let canvas = exArr.deepcopy(arr);
        let roomSizeX, roomSizeY;
        [roomSizeX, roomSizeY] = exArr.size(arr)
        for (var y = 0; y < roomSizeY; y++) {
            for (var x = 0; x < roomSizeX; x++) {
                if (canvas[x][y] === "s") {
                    [player["xpos"], player["ypos"]] = [x, y];
                }
            }
        }
    },
    parseRoom: function(roomStr) {
        let lines = roomStr.split("\n");
        lines.shift();
        let temp;
        let roomY = lines.length;
        let roomX = Math.max(...lines.map(line => line.length));
        let room = [];
        for (let x = 0; x < roomX; x++) {
            room.push([]);
            for (let y = 0; y < roomY; y++) {
                temp = Array.from(lines[y]);
                room[x].push(temp[x]);
                if (room[x][y] === undefined) room[x][y] = " ";
            }
        }
        return room
    },
    reverseObjOrder: function() {
        dynamicObjects.reverse()
    },
    renderRoom: function(arr) {
        // Setup Canvas (Backbuffer)
        let canvas = exArr.deepcopy(arr);
        console.clear();
        let roomSizeX, roomSizeY;
        [roomSizeX, roomSizeY] = exArr.size(arr);
        // Draw on Canvas
        // reverse iterator without array copying
        rparser.dynamicObjects.slice().reverse().forEach(obj => {
            canvas[obj.xpos][obj.ypos] = obj.icon;
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
        console.log("Current Position: ", dynamicObjects.player.xpos, dynamicObjects.player.ypos, " in Room: ", roomNum);
    }
}