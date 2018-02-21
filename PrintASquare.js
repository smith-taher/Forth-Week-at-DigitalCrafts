// Print A Square

var printSquare = function(size) {
    // var size = 5;
    var i = 0;
    for (var i = 0; i < size; i++) { // iterates rows
        for (var j = 0; j < size; j++) // iterates * in row
            console.log("*****");
        console.log("\n"); // moves to new row
    }
};