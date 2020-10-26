/*

    Project Name: NodeRPG - Refactored
    Date of Creation: 26.10.2020
    Creator: AltariasMainAccount
    Contact Creator: Altar#8020

    Description: This is the NodeRPG Project, refactored and finished up. This will replace the current status of NodeRPG.
    Modules Used: - NaN -
    Custom Modules: 1 (User Interface [MENU])

*/

/*
    Main Modules

    Modules that are used within this project go here
*/

// Main Modules
const readline = require('readline');

// Third Party Modules

// Custom Modules
const menu_ui = require ('./user_interaction/UI_menu');
const world_ui = require ('./user_interaction/UI_world');

/*
    Asset Modules

    Modules that are used in conjunction with other modules (aka. Asset Files/Asset Modules) go here
*/

const a_etc = require ('./assets/etc_mls');
const a_menu = require ('./assets/menu_mls');
const a_world = require ('./assets/world_mls');
const func_menu = require ('./assets/menu_function_tables');

/*
    Variable Initializer

    Variables used during runtime of the program go here
    Example Variables: Generated Menues, Generated Dungeon Textures, etc.
    Please declare them using "let"
*/

// Asset Variables

let menu_1 = menu_ui.createMenu("NodeRPG [FIRST BETA TEST!]", a_menu.m1_texture);
let menu_1_functions = func_menu.m1_functions;

// Runtime Variables

let currentState = "menu";
let currentMenu = menu_1;
let currentMenuFunctions = menu_1_functions;
let worldMap;

/*
    Program Code

    The actual program is below here
*/

// Set up raw input mode to standard input
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Preload the current menu
menu_ui.preloadMenu(currentMenu);
// If the standard input receives a keypress event, do the following
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else if (key.ctrl && key.name === 'z') {
        inQueue = [];
    } else {
        // If State = Menu - Do menu functions, Else if State = World - Do world functions, else throw error
        if (currentState == "menu") { menu_ui.processKey(key, currentMenu, currentMenuFunctions); }
        else if (currentState == "world") { world_ui.processKey(key, worldMap); }
        else throw console.error("currentState does not match any accepted states.");
    }
});