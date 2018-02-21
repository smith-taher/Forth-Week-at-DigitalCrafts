// Print Numbers

// While Loop
var printNumbers = function(start, end) {
    var count = start;
    while (count < end+1) {
        console.log(count);
        count++;
    }
};


// // For Loop
var printNumbers = function(start, end) {
    for (var count=start; count < end+1; count++) {
        console.log(count);
    }
};