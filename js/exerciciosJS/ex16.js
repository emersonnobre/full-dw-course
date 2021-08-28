const calc = (number1, op, number2) => {
    switch(op) {
        case '+':
            return number1 + number2
            break
        case '-':
            return number1 - number2
            break
        case '*':
            return number1 * number2
            break
        case '/':
            return number1 / number2
            break
        default:
            return 'invalid operation'
    }
}

console.log(calc(2, '+', 192))
console.log(calc(2, '*', 192))
console.log(calc(2, '-', 192))
console.log(calc(2, '/', 192))
console.log(calc(2, 'k', 192))