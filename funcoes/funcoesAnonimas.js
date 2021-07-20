// basicamente são funções sem nome

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, op = soma) {
    console.log(op(a, b))
}

imprimirResultado(11, 45)
imprimirResultado(11, 12414, (x, y) => x * y)