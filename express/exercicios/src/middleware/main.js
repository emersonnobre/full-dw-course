function main(req, res, next) {
    console.log('Esse middleware será chamado em todas as requisições')
    next() //sem chamar esse next a requisição pararia por aqui, sem enviar a devida resposta ao cliente.
}

export default main