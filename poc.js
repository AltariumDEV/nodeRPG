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

exports.room1 = `
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
w                                        w
w                                        w
w                                        w
w                                        w
w                                        w
w                                        w
w                                        w
w                                        w
wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
`