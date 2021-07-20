function f1(begin = 0, end = 100) {
    let interval = [], inicio, fim
    if (begin > end) {inicio = end; fim = begin}
    else {inicio = begin; fim = end}
    for(let i = inicio; i <= fim; i++){
        if(i%2 != 0) interval.push(i)
    }
    return interval
}

console.log(f1(2, 2000))