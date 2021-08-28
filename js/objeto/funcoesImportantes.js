const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 110
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // retorna um array contendo arrays para cada dupla

const destino = {
    a: 2
}
const o1 = { b: 2 }
const o2 = { sdfsdf: 2 }
const obj = Object.assign(destino, o1, o2) // concatena os objetos passados tomando como destino o primeiro param

console.log(obj)