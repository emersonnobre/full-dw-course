const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const funcionarios = []
 
axios.get(url).then(response => {
    let mulherMenorSalario = {
        nome: '', salario: 100000000
    }

    // Pegando a mulher chinesa com menor salario
    const funcionarios = Array.from(response.data) //resp.data de fato os dados contidos, se deixarmos só resp, vem todos os dados da requisição.
    funcionarios.forEach((funcionario) => {
        if(funcionario.pais == 'China') {
            if(funcionario.genero == 'F') {
                if(funcionario.salario < mulherMenorSalario.salario) {
                    mulherMenorSalario.nome = funcionario.nome
                    mulherMenorSalario.salario = funcionario.salario
                }
            }
        }
    })
    
    // console.log(funcionarios)
    console.log(mulherMenorSalario)

    //outra forma de fazer
    const func = funcionarios.filter((element) => {
        return element.pais == 'China'
    }).filter((element) => {
        return element.genero == 'F'
    }).reduce((funcionario, funcionarioAtual) => {
        return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
    })
    
    console.log(func)
})