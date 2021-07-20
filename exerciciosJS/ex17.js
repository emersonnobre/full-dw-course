const attPay = (plan, actualPay) => {
    switch (plan) {
        case 'A':
            return actualPay + (actualPay*0.1)
            break;
        case 'B':
            return actualPay + (actualPay*0.15)         
            break;
        case 'C':
            return actualPay + (actualPay*0.2)
            break
        default:
            return 'invalid plan'
    }
}

console.log(attPay('A', 1000))
console.log(attPay('B', 1000))
console.log(attPay('C', 1000))
console.log(attPay('Aefdf', 1000))
