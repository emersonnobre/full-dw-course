// prototype chain
const avo = { atr1: 'A' }
const pai = { __proto__: avo, atr2: 'B'}
const filho = { __proto__: pai, atr3: 'C'}
console.log(filho.atr1)

const carro = {
    veloMax: 300,
    veloAtual: 0,
    model: 'x422',
    acelerar(delta) {
        if((this.veloAtual + delta) < this.veloMax) {
            return this.veloAtual += delta
        } else {
            return this.veloAtual = this.veloMax
        }
    }
}

const ferrari = {
    model: 'f40', // shadowing
    veloAtual: 112, //shadowing
    veloMax: 320, // shadowing
}

Object.setPrototypeOf(ferrari, carro) // settando o prototype da ferrari
console.log(ferrari.acelerar(2000))
