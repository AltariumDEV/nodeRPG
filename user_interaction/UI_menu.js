/*
    
    Project Name - Module: User Interface [MENU]
    Date of Creation: 16.10.2020
    Creator: AltariasMainAccount
    Creator Contact: Altar#8020 (Discord)
    Modified by: - NaN -

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

    Latest Update: 0.76 (Origin NodeRPG Beta)
    Patch Notes:
    - Rendering of the menues requires "Asset Modules" - assets/menu_mls, assets/menu_function_tables
    - Added 24-bit color support, working on compatibility mode (8-bit and 16-bit color support(Expect this to work in Update 0.8))
    

    
    This piece of code is provided as is, you are allowed to modify this piece of code as long as you do not use it for commercial gain.
    Please keep this multiline comment intact, as it contains details about how people can contact me incase something breaks. If you did
    any modifications you are allowed to write your own name under "Modified by: ".
    
    Thank you. <3

*/

/*
    Variable Header

    Variables of the module go here
*/

// Position
let pos = 0;

// Color Constants
/*
    [!] KEEP THIS IN MIND WHILE USING THIS. [!] 
    Not every terminal supports 24-bit colors, some terminals will not display this properly.

    [<>] Color Format - \u001b[38;2;[R];[G];[B]m
*/
const titleType = "\u001b[1m\u001b[4m"
const deselColor = "\u001b[38;2;15;150;15m";
const selColor = "\u001b[38;255;255;255;0m";
const resetColor = "\u001b[0m";

/*
    Module Code

    The Code of the module starts below
*/

module.exports = {
    /*
        Create Menu Function

        Creates a basic structure for a menu, is nothing without the "processKey" function.
    */  
    createMenu: function (x, str) {
        // Create an array that takes a multi-line string, splits it on every newLine and prepares it for proper usage.
        let temp_arr = str.split("\n");
        let arr = temp_arr.slice(1, -1);
        // Create the object that is used
        let obj = {
            title: x,
            content: arr
        }
        // Return the object that was previously created
        return obj;
    },
    /*
        Preload Menu Function

        Allows you to preload the menu. (Used to invoke the menu before an input has been )
    */
    preloadMenu: function (obj) {
        // Set the current position of your cursor to the first element of the given array
        pos = 0;
        // Clear the console to clear up any weird logging anomalies
        console.clear();
        // Print the title in the object
        console.log(titleType + deselColor + obj.title + resetColor + "\n");
        arr = obj.content;
        // Start the rendering process (This is preloading, it is nothing without processKey())
        for(i = 0; i <= arr.length - 1; i++) {
            if(i == pos) {
                console.log(selColor + "[>] " + arr[i] + resetColor);
            } else {
                console.log(deselColor + "[ ] " + arr[i] + resetColor);
            }
        }
    },
    /* 
        Process Key Function
        
        Allows you to process the raw input of Node.js into something that is actually slightly useful. 
    */
    processKey: function (x, obj, functions_arr) {
        /*
            x = rawInput
            array = The array that you created using createMenu
            functions_arr = The Array of the functions that you have created for said menu
        */
        // Switch Statement to check what button has been pressed
        switch(x.name) {
            case 'up':
                if (pos == 0) { return; } else { pos--; }
                loadMenu(obj, pos);
                break;            
            case 'down':
                if (pos == obj.content.length - 1) { return; } else { pos++; }
                loadMenu(obj, pos);
                break;
            case 'return':
                executeEnter(functions_arr, pos);
                break;
            default:
                break;
        }
    },
}

/*
    Execute Enter Function

    This function executes the function of the "functions" array that has been given in processKey
    DO NOT MODIFY THIS UNLESS YOU KNOW WHAT YOU ARE DOING!
*/

function executeEnter(array, pos) {
    array[pos]();
}

/*
    Load Menu Function
    
    This will reload the given menu and mark the current position as "selected".
    This "selection" is purely cosmetic. You technically only need the position for "executeEnter" to work.
*/
function loadMenu(obj, pos) {
    // Clear the console to clear up any weird logging anomalies
    console.clear();
    // Print the title in the object
    console.log(titleType + deselColor + obj.title + resetColor + "\n");
    arr = obj.content;
    // Start the rendering process (This is preloading, it is nothing without processKey())
    for(i = 0; i <= arr.length - 1; i++) {
        if(i == pos) {
            console.log(selColor + "[>] " + arr[i] + resetColor);
        } else {
            console.log(deselColor + "[ ] " + arr[i] + resetColor);
        }
    }
}