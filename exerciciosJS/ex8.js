const comparaPontos = (array) => {
    let iPior = 0, pior = 0, bateu = 0, melhor = 0
    for(let i in array) {
        if(i == 0) pior = array[i]
        if(array[i] < pior) {
            pior = array[i]
            iPior = i
        }
        if(array[i] > melhor) {
            melhor = array[i]
            if(i != 0){
                bateu++
            }
        }
    }
    return [ bateu, iPior ]
}

console.log(comparaPontos([10, 10, 20, 4, 9]))