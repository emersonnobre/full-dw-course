// implementando foreach
const aprovados = ['Emerson', 'Carlos', 'Bentinho']
Array.prototype.forEach2 = function (functiion) {
    for (let index = 0; index < this.length; index++) {
        functiion(this[index], index)
    }
}


// função callback -- parametros sao sempre: valor, indice e o array
aprovados.forEach2(function(nome, index) {
    console.log(`${index + 1} - ${nome}`)
})

