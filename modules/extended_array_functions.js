module.exports = {
    /*
        2D Array Size Returner
    
        Gives you the accurate size of a 2D Array
    */
    size: function(arr) {
        var row_count = arr.length;
        var row_sizes = []
        for (var i = 0; i < row_count; i++) {
            row_sizes.push(arr[i].length)
        }
        return [row_count, Math.min.apply(null, row_sizes)]
    },
    /*
        Array Deepcopy
    
        Allows you to create a complete copy of the object that has been given, allowing you to copy arrays
    */
    deepcopy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}