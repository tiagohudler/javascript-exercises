const getTheTitles = function(array) {
    let len = array.length;
    const books = [];
    for (let i = 0; i < len; i++){
        books.push(array[i].title);
    }
    return books;
}

// Do not edit below this line
module.exports = getTheTitles;
