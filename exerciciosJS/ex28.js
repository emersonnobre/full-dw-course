const f1 = (number) => {
    let par = [], impar = []
    for(let i in number) {
        if(number[i]%2 == 0) {
            par.push(number[i])
        } else {
            impar.push(number[i])
        }
    }
    return `pares: ${par}\nimpares: ${impar}`
}

console.log(f1([ 10, 11, 12, 13, 14, 15, 16, 3, 4, ,1, 2, 7 ]))