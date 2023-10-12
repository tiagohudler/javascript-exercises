const sumAll = function(start, finish) {
    let sum = 0;
    if (start < 0 || finish < 0) return "ERROR";
    if (typeof(start) != "number" || typeof(finish) != "number") return "ERROR";
    if (finish > start){
        for(;start <= finish; start++){
            sum += start;
        }
    }
    else{
        for(;start >= finish; start--){
            sum += start;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
