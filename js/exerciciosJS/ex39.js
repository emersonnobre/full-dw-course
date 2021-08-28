function f1(array1 = [], array2 = []) {
    if(array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            array1[i] = array1[i] + array2[i]
            array2[i] = array1[i] - array2[i]
            array1[i] = array1[i] - array2[i]
        }
        return `array 1: ${array1}\narray 2: ${array2}`
    } else {
        return 'tamanhos diferentes'
    }
}

let a1 = [1, 2, 3], a2 = [3, 2, 1]
console.log(f1(a1, a2))
