// var character = ""
// let string = "Welcome to Digital Crafts";
// let stringLength = string.length
// // let's make a loog to create top and base
// for (let i = 0; stringLength > i; i++){
//     character += "*"
// }
// console.log(character)




var printBanner = function(text) {
    var textLength = [];
    var asterisk = "*";
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < text.length; j++) {
            if(i==0 || j == 0 || i == 3-1|| j == text.length-1){
                console.log(asterisk);
            }
            else {
                console.log(text);
            }
        }
        console.log("\n");
    }
};
printBanner("Welcome to DigitalCrafts");
