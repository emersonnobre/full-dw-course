function f1(params = []) {
    let sum = 0
    for(let i in params) {
        sum += params[i]
    }
    return sum/params.length
}

console.log(f1([ 10, 11, 12, 13, 14, 15, 16, 3, 4, 1, 2, 7 ]))
