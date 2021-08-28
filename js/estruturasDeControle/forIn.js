// percorrer elementos
const notas = [6, 3.2, 4, 1, 3.5]
for (const i in notas) {
    // console.log(notas[i])
}

const pessoa = {
    nome: 'Emerson',
    sobrenome: 'Nobre',
    idade: '18'
}

for (let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`)
}
