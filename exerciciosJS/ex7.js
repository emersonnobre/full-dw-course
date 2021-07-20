const resolveBhaskara = (a, b, c) => {
    let x = []
    let delta = Math.pow(b, 2) - 2*a*c
    if(delta >= 0) {
        x.push(
            ((-b + Math.sqrt(delta)) / 2*a),
            ((-b - Math.sqrt(delta)) / 2*a)
        )
        return x
    } else {
        return 'Delta negativo'
    }
}

console.log(resolveBhaskara(3, -5, 1))