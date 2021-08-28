const price = (a, b) => {
    let sum = (a + b).toFixed(2)
    sum = sum.toString()
    sum = sum.replace('.', ',')
    return 'R$' + sum
}

console.log(price(0.1, 0.2))
