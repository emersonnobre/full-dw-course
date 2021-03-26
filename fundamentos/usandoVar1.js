{
    {
        {
            {
                var sera = 'Será??'
            }
        }
    }
}

// Escopo -> onde a variável é visível -> blocos de código
// var é visível até mesmo fora dos seus escopos (exceto em funções, em que ela é restrita)

const teste = () => {
    var variavel = 'Lindo'
    console.log(variavel)
}

teste()

console.log(variavel) // nao enxerga a var da função