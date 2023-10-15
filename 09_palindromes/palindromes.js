const palindromes = function (string) {
    let veter = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    if(veter == veter.split("").reverse().join("")) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
