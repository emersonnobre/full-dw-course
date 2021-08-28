// quando não sabemos o número exato de repetições do laço
function getRandomIntegerBetween(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let option = 0

while(option != -1) {
    option = getRandomIntegerBetween(-1, 100)
    console.log(`Opcao escolhida foi ${option}`)
}