// Armazenando funções em variáveis
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(8234, 2345)

// Utilizando funções arrow e minimizando a estrutura
const saudacoes = (mensagem) => {
    console.log(mensagem + "!")
}

saudacoes("Fala felas")

// ocultando a palavra return e ocultando as {}
const alerta = (msg) => msg + ". Deseja fechar a janela?"
console.log(alerta("Senha inválida"))