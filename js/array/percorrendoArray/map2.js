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

result = carrinho.map(func)
console.log(result)