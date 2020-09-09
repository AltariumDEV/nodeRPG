exports.iconMapping = {
    "w": "█",
    " ": " ",
    "d": "▒",
    "e": "■",
    "s": "@",
}

exports.dynamicObjects = [
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
exports.dynamicObjects.reverse()

exports.parseRoom = (roomStr => {
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
});

exports.r = [
r1 = `
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
w                                        w                                         w
w                                        w                                         w
w                                        w                                         w
w                                        w                                         w
w                                        w                                         w
w                                        w                                         w
w      s                                 w                                         w
w                                        w                                         w
w                                        w                                         w
w                                        w                                         w
w                                        w                                         w
w                                        d                                         w
w                                        d                                         w
w                                        w                                         w
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                         w
                                         w                                     e   w
                                         w                                         w
                                         wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
    
`,
r2 = `
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
w              w                                                w
w              w                                                w
w      s       d                                                w
w              w                                                w
w              w                                                w
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww               wwwwwwwwwwwwwwwwww
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
                               w               w                 
               wwwwwwwwwwwwwwwww               wwwwwwwwwwwwwwwww
               w                                               w
               w                                               w
               w                                               w
               w                                               w
               w                       e                       w
               w                                               w
               w                                               w
               w                                               w
               wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
`,
r3 = `
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
w                 w                                                                  w
w                 w                                                                  w
w       s         d                                                             e    w
w                 w                                                                  w
w                 w                                                                  w
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
`
]


