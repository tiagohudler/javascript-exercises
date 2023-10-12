const reverseString = function(string) {
    let len = string.length - 1;
    let veter = "";
    for (; len >= 0; len--){
        veter += string.charAt(len);
    }
    return veter;
};

// Do not edit below this line
module.exports = reverseString;
