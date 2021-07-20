const notas = [6, 5.4, 6.2, 9.6, 10, 4.2, 7.2]


// Sem callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)