const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // this olha para o objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // não consegue achar o saudação pois o this é diferente nesse contexto

// para resolver
const falar2 = pessoa.falar.bind(pessoa)
falar2()

