function maybe(value, errorProbability) {
    return new Promise((resolve, reject) => {
        if(Math.random() < errorProbability) reject('Ocorreu um erro')
        else resolve(value)
    })
}

Promise.all([
    maybe('Deu certo', 0.7),
    maybe('Deu certo', 0.09),
    maybe('Deu certo', 0.2),
    maybe('Deu certo', 0.1),
    maybe('Deu certo', 0.9),
]).then(console.log).catch(err => console.log(`ERRO: ${err}`))

maybe('Deuuu', 0.9)
.then(console.log)
.catch(console.log)