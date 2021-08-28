const notas = [0, 1.2, 3.4, 8.2, 9.6, 10, 4]

for (let x in notas) {
    if (x == 5) break
    // console.log(`${x} = ${notas[x]}`)
}

for (let x in notas) {
    if (x == 5) continue
    console.log(`${x} = ${notas[x]}`)
}