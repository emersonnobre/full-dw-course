// promisse - operaçõa assícrona
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            // reject('errinho básico')
        }, segundos * 1000)
    })
}
process.stdin.on('data', data => {
    falarDepoisDe(3, data.toString())
        .then(resolve => {
            console.log(`Frase do resolve: ${resolve}`)
            process.exit()
        })
        .catch(error => console.log(error))
    
})
