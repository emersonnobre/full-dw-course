// arrow function

const soma = (a, b) => a + b // sempre anonima
console.log(soma(3432, 234324))

// arrow function this -> aponta para o módulo
const lexico = () => console.log(this === exports)
lexico()

// default param
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('EEEEEEEEi')

// operador rest (agrupar) ou spread (espalhar)
function total(...values) {
    let total = 0
    values.forEach(value => total += value)
    return total
}

console.log(total(23,12,124,124,12,424,12,1))