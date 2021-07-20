const classificaTriangulo = (a, b, c) => {
    if(a == b == c) {
        console.log('Equilátero')
    } else if(a == b || a == c || b == c) {
        console.log('Isósceles')
    } else {
        console.log('Escaleno')
    }
}

classificaTriangulo(1, 1, 1)
classificaTriangulo(1, 1, 2)
classificaTriangulo(1, 14, 2)