const pai = { nome: 'Pedro', corCabelo: 'loiro' }
const filha1 = Object.create(pai)
filha1.nome = 'Bia'
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

const filha2 = Object.create(pai, {
    nome: { value: 'Lara', writable: false, enumerable: true }
})

filha2.nome = 'Marcos'
console.log(filha2.nome)

for(let value in filha2) {
    filha2.hasOwnProperty(value) ? console.log(value) : console.log(`Por herança: ${value}`)
}
