// prototipos
// se não definimos prototipos para nossos objetos, ele utilizam por padrao o Object.prototype

const criaCarro = (modelo, ano) => {
    return {
        modelo,
        ano
    }
}

let ferrari = criaCarro('f40', 2012)

console.log(ferrari.prototype)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)