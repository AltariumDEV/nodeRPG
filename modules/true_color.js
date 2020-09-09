exports.trueColorLog = (red, green, blue, str) => {
    let color = "\u001b[38;2;" + red + ";" + green + ";" + blue + "m";
    let reset = "\u001b[0m";
    console.log(color + str + reset);
};

