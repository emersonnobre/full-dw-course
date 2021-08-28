// Object.preventExtensions - não pode add novos elementos
const produto = Object.preventExtensions({
    nome: 'item dourado', preco: 16789.22, tag: 'raro'
})

produto.ano = 2000 //não conseguiremos adicionar mais atributos
console.log(produto)

//Object.seal - não pode add nem remover
const pessoa = { nome: 'carlos' }
Object.seal(pessoa)
console.log('Selado: ' + Object.isSealed(pessoa))

//Object.freeze - nem add nem remove nem edit
const pessoa2 = { nome: 'carlos' }
Object.freeze(pessoa)
console.log('Frizado: ' + Object.isFrozen(pessoa))