const peso1 = 6.5
const peso2 = Number('3.5')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.80
const avaliacao2 = 6.3

total = avaliacao1 * peso1 + avaliacao2 * peso2
media = total / (peso1 + peso2) //8.575

console.log(media.toFixed(2)) //mostra apenas duas casas decimais
console.log(media.toString())
console.log(typeof media)
console.log(typeof Number) // Number é uma função nativa do js