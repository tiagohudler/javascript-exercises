const findTheOldest = function(array) {
    let oldest;
    let highestAge = 0;
    let len = array.length;
    for (let i = 0; i < len; i++){
        let currentAge;
        if (array[i].yearOfDeath) {currentAge = array[i].yearOfDeath - array[i].yearOfBirth;}
        else {currentAge = 2023 - array[i].yearOfBirth;}
        if (currentAge > highestAge){
            highestAge = currentAge;
            oldest = i;
        }
    }
    return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
