

const gerarNumerosEntre = (inicial, final, numerosRepetidos) => {
    if(inicial > final) [inicial, final] = [final, inicial]
    return new Promise((resolve, reject) => {
        const fator = final - inicial + 1 
        let valor = parseInt(Math.random() * fator) + inicial
        if(numerosRepetidos.includes(valor)) {
            reject('Número repetido!')
        } else {
            resolve(valor)
        }
    })
}

async function megaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (error) {
        if(tentativas > 1) throw 'Não consegui :('
        else return megaSena(qtdNumeros, tentativas++)        
    }
}

megaSena(25)
.then(console.log)
.catch(console.log)