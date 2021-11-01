const awaitFor = (seconds, msg) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => resolve(`MESSAGE: ${msg}`), seconds * 1000)
        } catch (error) {
            reject(error)
        }
    })
}

async function exec() {
    let valor = await awaitFor(2, 'meu nome é julia') // await substitui o then....
    console.log(valor)
    valor = await awaitFor(1, 'meu nome é ramon') // await substitui o then....
    console.log(valor)
    valor = await awaitFor(5, 'meu nome é rodrigoFilmes') // await substitui o then....
    console.log(valor)
}

exec()