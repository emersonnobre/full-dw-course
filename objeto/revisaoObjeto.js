// Pares de chave e valor
const objeto = new Object
// podemos criar atributos dinamicamente
objeto.nome = 'emerson'
objeto.preco = 'sem preco bebe'
console.log(objeto)
delete objeto.preco
console.log(objeto)

// podemos ter atributos normais, atributos de objetos, atributos de array, atributos de funções
const carro = {
    nome: 'A4',
    preco: 100000,
    endereco: {
        rua: 'manala',
        numero: 12
    },
    condutores: [{
        nome: 'carlos',
        idade: 18
    }, {
        nome: 'aninha',
        idade: 20
    }],
    showName: function() {
        console.log(this.nome)
    }
}

carro.showName()