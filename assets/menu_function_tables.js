let globalVars = require("../environment/global_variables.js")
let world_ui = require("../user_interaction/UI_world.js")

module.exports = {
    m1_functions: [
        a = function() {
            globalVars.currentState = "world";
        },
        b = function() {
            console.log("Default_Outcome_2");
        },
        c = function() {
            console.log("Default_Outcome_3");
        },
        d = function() {
            console.log("Default_Outcome_4");
        },
        e = function() {
            process.exit(0);
        }
    ]
}