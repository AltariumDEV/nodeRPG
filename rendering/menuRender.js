/*
    Independent Menu Render Magic
    
    Creator: Altarias
    Creator Contact: Altar#8020 (Discord)

    Description: 
        This file enables you to create a menu from any multiline string that is given.

    Small Tutorial:
        1. Require the module from your index.js file
        2. Create a multiline string that you want to turn into a Menu
        3. Use the function "createMenu" on the variable where your multiline string is (NOTE: This returns an array, you might want to assign it to a variable)
            e.g. let newMenu = imr.createMenu(awesomeMultilineString);
        4. [WARNING - You need to have "raw input mode" enabled for this, example code can be found in the index.js file of this repl (https://repl.it/@Altarias/Menu-Testing#index.js)] Make proper raw input structuring -> in the else block, use processKey(key, arrayNameHere)
        5. If all was done correctly, you should be able to use Up Arrow, Down Arrow and Enter to
        navigate your created menu

    Latest Update: 0.99999... (Pre-Release)
    Patch Notes:
    - Made Rendering Independent from the raw Input
    - Put variables on top of the code for easier management
    

    This piece of code is provided as is, please keep this multiline comment
    intact. Thank you. <3
*/


// Position
let pos = 0;

// Color Constants
/*
    Change these after the RGB values that you want to use

    [!] KEEP THIS IN MIND WHILE USING THIS. [!] 
    Not every terminal supports 24-bit colors, some terminals will not display this properly.
    The Terminal on Repl.it may show it properly, however your old DOS terminal from 1990 may not.
    I am working on a 16-bit render mode that is, however, unfinished. (Even that may not work on your old DOS Terminal)

    If you see issues regarding the colors it might not be an error of the code, 
    it may be because your terminal is older than node.js itself.

    [<>] Color Format - \u001b[38;2;[R];[G];[B]m
*/
const deselColor = "\u001b[38;2;150;150;150m";
const selColor = "\u001b[38;255;255;255;0m";
const resetColor = "\u001b[39m";

module.exports = {
    // Create Menu Function
    // Creates a basic structure for a menu, is nothing without the "processKey" function.
    createMenu: function (str) {
        let arr = str.split("\n");
        arr.shift();
        arr.pop();
        return arr;
    },
    // Process Key Function
    // Allows you to process the raw input of Node.js into something that is actually slightly useful.
    processKey: function (x, array, functions_arr) {
        switch(x.name) {
            case 'up':
                if (pos == 0) { return; } else { pos--; }
                loadMenu(array, pos);
                break;            
            case 'down':
                if (pos >= array.length - 1) { return; } else { pos++; }
                loadMenu(array, pos);
                break;
            case 'return':
                executeEnter(functions_arr, pos);
                break;
            default:
                break;
        }
    },
}

// Execute Enter Functions
// write an array with functions that corelates to the menu, give it to this function and watch the world burn. </3

function executeEnter(array, pos) {
    array[pos]();
}

// Load Menu Function
// This will reload the given menu and mark the current position as "selected"
// This "selection" is purely cosmetic. You technically only need the position for "executeEnter" to work.

function loadMenu(arr, pos) {
    console.clear();
    for(i = 0; i <= arr.length - 1; i++) {
        if(i == pos) {
            console.log(selColor + "[>] " + arr[i] + resetColor);
        } else {
            console.log(deselColor + "[ ] " + arr[i] + resetColor);
        }
    }
}

