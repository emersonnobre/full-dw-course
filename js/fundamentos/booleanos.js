let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

// Quando colocamos a expressão !! na frente de qualquer termo, forçamos ele a se tornar booleano
console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!'text')

console.log('os falsos...')
console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtive = false))

let nome = 'Robson'
console.log(nome || 'Desconhecido') // Imprime o primeiro true encontrado