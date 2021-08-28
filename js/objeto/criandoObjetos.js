// Literal
const literal = {
}

// New Object
const object = new Object

// Funções construtoras
function Construtora(nome, idade) {
    this.nome = nome //tudo com this fica disponivel fora da funcao
    this.getIdade = () => {
        return idade
    }
}
const objeto = new Construtora('Marcon', 33)
console.log(objeto.nome)
console.log(objeto.getIdade())

// Função factory
function criarFuncionario(nome, salario, cep) {
    return {
        nome,
        salario,
        cep
    }
}
const fac = criarFuncionario('carlito', 1200, 79084444)
console.log(fac)

// Object.create
const filha = Object.create(null)
console.log(filha)

// Criando obj a partir de JSON
const fromJSON = JSON.parse('{"nome": "fds"}')
console.log(typeof fromJSON)