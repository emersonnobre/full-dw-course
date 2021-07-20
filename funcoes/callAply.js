// criamos uma função em que podemos encaixar em contextos diferentes posteriormente
function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const carro = {
    preco: 52500,
    desc: 0.1
}

console.log(getPreco.call(carro, 0.05)) // passamos os parametros a serem utilizados dentro do call
console.log(getPreco.apply(carro, [0.17])) // passamos os parametros dentro de um array