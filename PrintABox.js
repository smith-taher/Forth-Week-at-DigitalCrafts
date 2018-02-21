var printBox = function(width, height) {
    var asterisk = ("*");
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if(i==0 || j == 0 || i == height-1|| j == width-1){
                console.log(asterisk);
            }
            else {
                console.log(" ");
            }
        }
        console.log("\n");
    }
};