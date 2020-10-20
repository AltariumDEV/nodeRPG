module.exports = {
    size: function(arr) {
        var row_count = arr.length;
        var row_sizes = []
        for (var i = 0; i < row_count; i++) {
            row_sizes.push(arr[i].length)
        }
        return [row_count, Math.min.apply(null, row_sizes)]
    },
    deepcopy: function(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}