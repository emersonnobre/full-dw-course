// middleware pattern

const passo1 = (contexto, next = () => {}) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next = () => {}) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto, next = () => {}) => {
    return contexto.valor3 = 'mid3'
}

// função middleware
// const exec = (contexto, ...middlewares) => {
//     const execPasso = indice => {
//         middlewares && indice < middlewares.length &&
//             middlewares[indice](contexto, () => execPasso(indice + 1))
//     }
//     execPasso(0)
// }

const exec = (contexto, ...functions) => {
    const execPassos = indice => {
        if(indice < functions.length) {
            try {
                functions[indice](contexto, execPassos(indice + 1))
            } catch (error) {
                console.log('fim')
            }   
        }
    }
    execPassos(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)