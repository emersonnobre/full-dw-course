Array.prototype.map2 = function(callback) {
    let result = []
    for (let index = 0; index < this.length; index++) {
        result.push(callback(this[index]))
    }
    return result
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 20.10 }',
    '{ "nome": "estojo", "preco": 31.30 }',
    '{ "nome": "caneta", "preco": 1.2 }',
]

const func = (json) => {
    let object = JSON.parse(json)
    return `R$${parseFloat(object.preco).toFixed(2).replace('.', ',')}`
} 

result = carrinho.map2(func)
console.log(result)