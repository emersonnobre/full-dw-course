// rest / spread

// spread com objeto
const funcionario = {
    nome: 'Maria',
    sario: 50000
}

const pessoa = {
    cpf: '019348023823',
    mae: 'Antonia',
    ...funcionario // pega todos os atributos de funcionario
}

console.log(Object.values(pessoa))

// spread com array
const grupoA = ['Ariana', 'Grande', 'Marcos', 'Aba']
const grupoFinal = ['Marcela', ...grupoA, 'Carlinhos'] // pega todos os valores de grupoA
console.log(grupoFinal)

