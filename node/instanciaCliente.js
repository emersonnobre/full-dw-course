instanciaA = require('./instanciaUnica')
instanciaB = require('./instanciaUnica')

instanciaC = require('./instanciaNova')()
instanciaD = require('./instanciaNova')()

instanciaA.inc()
instanciaA.inc()
console.log(instanciaB.valor) //retorna 2 por termos invocado o A

instanciaC.inc()
instanciaC.inc()
console.log(instanciaD.valor) // 0 pois são objetos separados dessa vez



