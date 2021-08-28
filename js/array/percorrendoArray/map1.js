// utilizado para transformar os dados de um array, gerando um novo

const nums = [1, 2, 4, 5, 6, 7, 8]

let result = nums.map(number => number*Math.PI) //simples demais
console.log(result)

// podemos criar a callback com antecedencia
const soma = e => e + 10
result = nums.map(soma)
console.log(result)
