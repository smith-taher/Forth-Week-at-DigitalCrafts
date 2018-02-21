var cipher = function(text, offset) {
    // var caesarShift = function(str, amount) {

    // Wrap the amount
    if (offset < 0)
        return caesarShift(text, offset + 26);
    
    // Make an output variable
    var output = '';
    
    // Go through each character
    for (var i = 0; i < text.length; i ++) {
    
        // Get the character we'll be appending
        var c = text[i];
    
        // If it's a letter...
        if (c.match(/[a-z]/i)) {
    
            // Get its code
            var code = text.charCodeAt(i);
    
            // Uppercase letters
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + offset) % 26) + 65);
    
            // Lowercase letters
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + offset) % 26) + 97);
    
            }
    
            // Append
            output += c;
    
        }
    
        // All done!
        return output;
    
};