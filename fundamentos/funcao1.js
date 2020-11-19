//Sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(3, 41)

//Com retorno
//O valor padrão de b é 1.
function soma(a, b = 1) {
    return a + b
}

console.log(soma(28, 55))
console.log(soma(33))