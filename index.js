const game_content = require("./src/initGameContent.js");
const game_code = require('require-all')(__dirname + '/src/game_code');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
console.clear();
process.stdin.setRawMode(true);
console.clear();

game_code["menu"].initFromModule("mainMenu");

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    } else {
        game_code["menu"].processKey(key);
    }
});