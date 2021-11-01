const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(err) {
                    reject(err)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(arrayTurmas => [].concat(...arrayTurmas))
    .then(arrayAlunos => arrayAlunos.map(aluno => aluno.nome))
    .then(arrayNomes => console.log(arrayNomes))
    .catch(err => console.log(err))