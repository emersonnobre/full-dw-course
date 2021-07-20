function f1(array = [], integer) {
    let resultArray = []
    for(let i in array) {
        resultArray.push(array[i]*integer)
    }    
    return resultArray
}

function f2(array = [], integer = 5) {
    if(integer > 5) {
        let resultArray = []
        for(let i in array) {
            resultArray.push(array[i]*integer)
        }    
        return resultArray
    } else {
        return null
    }
}

console.log(f1([3, 2], 2.4))
console.log(f2([3.2, 5.6], 2.4))
console.log(f2([3.2, 5.6], 24))
