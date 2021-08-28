function soma (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma(), soma(3), soma(1, 2), soma(0, 0, 1))

function soma3(a = 1, b = 2, c = 3) {
    return a + b + c
}

console.log(soma3())