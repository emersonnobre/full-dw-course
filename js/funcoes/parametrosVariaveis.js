// podemos criar uma função em que o número de parâmetros não é fixo
// o arguments é um array que contém os parâmetros passados

function sum () {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(sum())
console.log(sum(2))
console.log(sum(1, 5, 2))
console.log(sum(0, 8, 3, 2, 3, 4))
