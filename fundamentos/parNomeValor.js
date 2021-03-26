const saud = 'OLA' //contexto léxico 1

function exec() {
    const saud = 'FALAAA' //contexto léxico 2
    return saud
}

//objetos são grupos de chave valor, tipo uns pacotinhos de infos.

const pessoa = {
    nome: 'Helena',
    idade: 11,
    peso: 53,
    endereco: {
        rua: 'dos amantes',
        numero: '67'
    }
}

console.log(saud) // pega a do contexto lexico onde se encontra OLA
console.log(exec()) // retorna o FALAAA que está no contexto lexico da função
console.log(pessoa.endereco.rua)
