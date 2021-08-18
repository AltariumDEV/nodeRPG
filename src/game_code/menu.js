const titleType = "\u001b[1m\u001b[4m"
const deselColor = "\u001b[38;2;150;150;150m";
const selColor = "\u001b[38;255;255;255;0m";
const resetColor = "\u001b[0m";

let currentMenu;

class Menu {
    constructor(title, menu_data) {
        this.pos = 0;
        this.title = title;
        this.content = menu_data;
    }
}

function init(menu) {
    currentMenu = menu;
}

function initFromModule(name) {
    currentMenu = defaultMenues[name];
}

function preload() {
    let pos = 0
    console.clear();
    console.log(titleType + deselColor + currentMenu.title + resetColor + "\n");
    for(i = 0; i <= currentMenu["content"].length - 1; i++) {
        if(i == pos) {
            console.log(selColor + "[>] " + currentMenu["content"][i]["texture"] + resetColor);
        } else {
            console.log(deselColor + "[ ] " + currentMenu["content"][i]["texture"] + resetColor);
        }
    } 
}

function load(pos) {
    console.clear();
    console.log(titleType + deselColor + currentMenu.title + resetColor + "\n");
    for(i = 0; i <= currentMenu["content"].length - 1; i++) {
        if(i == pos) {
            console.log(selColor + "[>] " + currentMenu["content"][i]["texture"] + resetColor);
        } else {
            console.log(deselColor + "[ ] " + currentMenu["content"][i]["texture"] + resetColor);
        }
    }
}

function processKey(key) {
    switch(key.name) {
        case 'up':
            if (currentMenu.pos == 0) {
                return;
            } else {
                currentMenu.pos--;
            }
            load(currentMenu.pos);
            break;            
        case 'down':
            if (currentMenu.pos >= currentMenu["content"].length - 1) {
                return;
            } else {
                currentMenu.pos++;
            }
            load(currentMenu.pos);
            break;
        case 'right':
            this.doEnter(currentMenu.pos);
            break;
        default:
            break;
    }
}

function doEnter(pos) {
    currentMenu["content"][pos]["menuFunction"]();
}

const menu_data = {
    mainMenu: [
        {
            texture: "First Option",
            menuFunction: function () {
                console.log("Fancy First Function goes here");
            }
        },
        {
            texture: "Second Option",
            menuFunction: function() {
                console.log("Saucy Second Function goes here");
            }
        },
        {
            texture: "Third Option",
            menuFunction: function() {
                console.log("Thicc Third Function goes here");
            }
        },
        {
            texture: "Fourth Option",
            menuFunction: function() {
                console.log("Fancy Fourth Function goes here");
            }
        },
        {
            texture: "Fifth Option",
            menuFunction: function() {
                console.log("Final Fifth Function goes here");
            }
        },
        {
            texture: "Terminate Program",
            menuFunction: function() {
                console.log("You decided to terminate the program.");
                process.exit(0);
            }
        }
    ],
}

const defaultMenues = {
    mainMenu: new Menu("NodeRPG Logic Test", menu_data["mainMenu"])
}

module.exports = {
    Menu,
    init,
    initFromModule,
    preload,
    processKey,
    doEnter
}