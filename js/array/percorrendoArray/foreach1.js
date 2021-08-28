const aprovados = ['Emerson', 'Carlos', 'Bentinho']

// função callback -- parametros sao sempre: valor, indice e o array
aprovados.forEach(function(nome, index) {
    console.log(`${index + 1} - ${nome}`)
})

