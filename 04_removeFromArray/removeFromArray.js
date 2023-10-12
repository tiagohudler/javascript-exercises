const removeFromArray = function(array, ...args) {
    let len = array.length;
    let lenargs = args.length;
    for (let i = 0; i < lenargs; i++) {
        for (let j = 0; j < len; j++){
            if (array[j] === args[i]){
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
