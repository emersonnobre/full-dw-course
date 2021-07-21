// quando temos nome da chave igual nome do valor
const criaPessoa = (nome, idade) => {
    return {
        nome,
        idade
    }
} 

// podemos utilizar valores de variaveis para gerar atributos utilizando colchetes
let nomeAtributo = 'nota'
let valorAtributo = 8.99

const obj2 = {
    [nomeAtributo]: valorAtributo
}

console.log(obj2)