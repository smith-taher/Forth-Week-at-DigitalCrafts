var obj = {
    A : '4',
    E : '3',
    G : '6',
    L : '1',
    O : '0',
    S : '5',
    T : '7',
}
var leetSpeak = function(text) {     
   
    var arr = text.toUpperCase().split('');
    for (var i in arr){
        arr[i] = obj[arr[i]];
    }
    return arr.join('');
};
//   leetSpeak('Leet');