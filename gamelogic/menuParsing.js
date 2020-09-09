// Module Loader
let tclog = require('../modules/true_color.js');

// Options
let options = [
    "[+] New Game  [+]",  
    "[+] Continue  [+]", 
    "[+] Settings  [+]", 
    "[+] Credits   [+]", 
    "[+] Exit Game [+]"
]

// setup Menu
let selected = 0;
exports.renderMenu = (menuType => {
    console.clear();
    switch (menuType) {
        case "main":
            tclog.trueColorLog("105", "105", "105", "- Menu Test -\n");
            for (let e = 0; e < opt.length; e++) {
                if(e === selected) {
                    tclog.trueColorLog("255", "255", "0", opt[e]+"\n");
                } else {
                    tclog.trueColorLog("105", "105", "105", opt[e]+"\n");   
                }
            }    
        break;
        default:
        break;
    }
});

exports.getMenuFunction = (opt => {
    let input = opt;
    switch (input) {
        case 1:
            
        break;
        case 2:
            
        break;    
        case 3:
            
        break;
        case 4:
            
        break;        
        default:
        break;
    }
});