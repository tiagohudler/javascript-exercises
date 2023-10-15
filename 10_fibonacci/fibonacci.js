const fibonacci = function(arg) {
    if (arg < 0) return "OOPS"
    let atual = 1;
    let anterior = 0;
    let proximo;
    while (arg > 1){
        proximo = atual + anterior;
        anterior = atual;
        atual = proximo;
        arg--;
    }
    return atual;
};

// Do not edit below this line
module.exports = fibonacci;
