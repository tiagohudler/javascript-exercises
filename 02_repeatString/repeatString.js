const repeatString = function(string, num) {
    let veter = '';
    if (num < 0){
        veter = "ERROR";
        return veter;
    }
    for(; num > 0; num--){
        veter += string;
    }
    return veter;
};

// Do not edit below this line
module.exports = repeatString;
