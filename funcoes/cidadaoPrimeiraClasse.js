// funcao é altamente manipulavel e é tratada como um dado.

// literal

function showData (data) {
    console.log(data)
}

showData({nome: 'emerson', idade: 18})

// armazenando em variável

let sum = function (v1, v2) {
    console.log(v1 + v2)
}

sum(123444, 2221425)

// armazenando em um array

const array = [sum, showData]
console.log(array[1]({nome: 'emerson'}))

// armazenando em atributos de objetos

const obj = {}
obj.falar = (nome) => 'Opa!! ' + nome
console.log(obj.falar('emerson'))

// função como parametro

function run (fun) {
    fun()
}

run(() => { console.log('executadno...') })

// função que retorna função

function soma (v1, v2) {
    return function (v3) {
        console.log(v1 + v2 + v3)
    }
}

soma(34324, 12434)(143243)


