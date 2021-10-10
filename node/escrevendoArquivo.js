const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1999.99,
    desconto: 0.17
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo gerado!!!')
})