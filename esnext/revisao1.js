// let escopo de bloco
{
    var a = 1
    let b = 2
}

console.log(a)
//console.log(b)

// Template string
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [...letras] = 'Emerson delas'
console.log(letras)
const [x, y] = [1, 2]
console.log(x, y)